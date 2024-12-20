import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

interface AdminContextType {
  isAdmin: boolean;
  adminLogin: (email: string, password: string) => boolean;
  adminLogout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(() => {
    return sessionStorage.getItem('isAdmin') === 'true';
  });

  useEffect(() => {
    sessionStorage.setItem('isAdmin', isAdmin.toString());
  }, [isAdmin]);

  const adminLogin = (email: string, password: string) => {
    // For demo purposes, using hardcoded admin credentials
    if (email === 'admin@admin.admin' && password === 'admin111995') {
      setIsAdmin(true);
      sessionStorage.setItem('adminEmail', email);
      toast.success('Admin logged in successfully');
      return true;
    }
    toast.error('Invalid admin credentials');
    return false;
  };

  const adminLogout = () => {
    setIsAdmin(false);
    sessionStorage.removeItem('isAdmin');
    sessionStorage.removeItem('adminEmail');
    toast.success('Admin logged out successfully');
  };

  return (
    <AdminContext.Provider value={{ isAdmin, adminLogin, adminLogout }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}