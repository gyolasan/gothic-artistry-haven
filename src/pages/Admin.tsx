
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AdminLogin from '@/components/admin/AdminLogin';
import ArtworkUploader from '@/components/admin/ArtworkUploader';
import { useAdmin } from '@/contexts/AdminContext';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

const Admin = () => {
  const { isAdmin, logout } = useAdmin();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container px-4 py-10 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-gothic italic tracking-tighter mb-4">
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Admin Panel
            </span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-muted-foreground">
            Upload and manage your artwork collection
          </p>
        </div>

        {isAdmin ? (
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-end mb-6">
              <Button variant="outline" onClick={logout} className="flex items-center gap-2">
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
            <ArtworkUploader />
          </div>
        ) : (
          <div className="max-w-md mx-auto">
            <AdminLogin />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
