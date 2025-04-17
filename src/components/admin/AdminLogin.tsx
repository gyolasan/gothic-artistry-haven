
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAdmin } from '@/contexts/AdminContext';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAdmin();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  
    if (error) {
      toast.error('Login failed: ' + error.message);
    } else {
      toast.success('Logged in!');
    }
  };

  return (
    <div className="p-6 rounded-lg border border-border/40 bg-card/30 backdrop-blur-sm">
      <h2 className="text-2xl font-gothic italic mb-4">Admin Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <Input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
          />
        </div>
        <Button variant="gothic" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default AdminLogin;
