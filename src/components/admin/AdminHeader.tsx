import { useNavigate } from 'react-router-dom';
import { Users, LogOut, User } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';
import { useState } from 'react';
import { LogoutConfirmationDialog } from '../auth/LogoutConfirmationDialog';
import toast from 'react-hot-toast';

export function AdminHeader() {
  const navigate = useNavigate();
  const { adminLogout } = useAdmin();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogout = () => {
    adminLogout();
    toast.success('Logged out successfully');
    navigate('/boss/kho/logy');
  };

  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-blue-600" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/profile')}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              <User className="h-5 w-5 mr-2" />
              Profile
            </button>
            <button
              onClick={() => setShowLogoutDialog(true)}
              className="flex items-center px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <LogoutConfirmationDialog
        isOpen={showLogoutDialog}
        onClose={() => setShowLogoutDialog(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
}