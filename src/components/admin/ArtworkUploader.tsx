
import React, { useState, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { categories } from '@/data/artworks';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'sonner';
import { Checkbox } from '@/components/ui/checkbox';
import { ImagePlus, Upload } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

type FormData = {
  title: string;
  description: string;
  categories: string[];
  featured: boolean;
};

const ArtworkUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  
  const form = useForm<FormData>({
    defaultValues: {
      title: '',
      description: '',
      categories: [],
      featured: false
    }
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: FormData) => {
    if (!selectedFile) {
      toast.error("Please select an image to upload");
      return;
    }

    try {
      setIsUploading(true);
      setUploadProgress(10);

      // Get current user
      // const { data: userData, error: userError } = await supabase.auth.getUser();
      
      // if (userError || !userData.user) {
      //   throw new Error("You must be logged in to upload artworks");
      // }
      
      setUploadProgress(20);

      // Upload image to Supabase Storage
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('artworks')
        .upload(fileName, selectedFile);

      if (uploadError) {
        throw uploadError;
      }
      
      setUploadProgress(60);

      // Get the public URL for the uploaded image
      const { data: { publicUrl } } = supabase.storage
        .from('artworks')
        .getPublicUrl(fileName);

      setUploadProgress(80);

      // Insert artwork data into the database
      const { error: insertError } = await supabase
        .from('artworks')
        .insert({
          title: data.title,
          description: data.description,
          image_url: publicUrl,
          categories: data.categories,
          featured: data.featured,
          user_id: userData.user.id // Add the user_id field
        });

      if (insertError) {
        throw insertError;
      }

      setUploadProgress(100);
      toast.success("Artwork uploaded successfully!");
      form.reset();
      setSelectedFile(null);
      setPreviewUrl(null);
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  return (
    <div className="p-6 rounded-lg border border-border/40 bg-card/30 backdrop-blur-sm">
      <h2 className="text-2xl font-gothic italic mb-4">Upload New Artwork</h2>
      
      <div className="mb-6">
        <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
          {previewUrl ? (
            <div className="relative">
              <img 
                src={previewUrl} 
                alt="Preview" 
                className="max-h-64 mx-auto rounded-md"
              />
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => {
                  setSelectedFile(null);
                  setPreviewUrl(null);
                }}
                className="absolute top-2 right-2 bg-background/80 hover:bg-background"
              >
                Change
              </Button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center h-40 cursor-pointer">
              <ImagePlus className="h-12 w-12 text-muted-foreground mb-2" />
              <span className="text-muted-foreground">Click to select an image</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
                disabled={isUploading}
              />
            </label>
          )}
        </div>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter artwork title" {...field} required />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter artwork description" {...field} required />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="categories"
            render={() => (
              <FormItem>
                <FormLabel>Categories</FormLabel>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`category-${category}`}
                        checked={form.watch('categories').includes(category)} 
                        onCheckedChange={(checked) => {
                          const currentCategories = form.getValues('categories');
                          const newCategories = checked
                            ? [...currentCategories, category]
                            : currentCategories.filter(cat => cat !== category);
                          form.setValue('categories', newCategories);
                        }}
                      />
                      <label
                        htmlFor={`category-${category}`}
                        className="text-sm cursor-pointer"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="featured"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Featured Artwork</FormLabel>
                  <FormDescription>
                    Display this artwork prominently on the homepage
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
          
          {isUploading && (
            <div className="w-full bg-secondary/30 rounded-full h-2.5">
              <div 
                className="bg-primary h-2.5 rounded-full transition-all duration-300" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          )}
          
          <Button 
            type="submit" 
            variant="gothic"
            disabled={!selectedFile || isUploading}
            className="w-full"
          >
            <Upload className="mr-2 h-4 w-4" />
            {isUploading ? "Uploading..." : "Upload Artwork"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ArtworkUploader;
