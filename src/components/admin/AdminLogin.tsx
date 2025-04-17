
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAdmin } from '@/contexts/AdminContext';
import { toast } from 'sonner';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const { login } = useAdmin();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      toast.success('Logged in as admin');
    } else {
      toast.error('Invalid password');
    }
    setPassword('');
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
