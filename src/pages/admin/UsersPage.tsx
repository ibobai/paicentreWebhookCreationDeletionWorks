import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminHeader } from '../../components/admin/AdminHeader';
import { UserTable } from '../../components/admin/users/UserTable';
import { UserDetailsDialog } from '../../components/admin/users/UserDetailsDialog';
import { UserGrowthChart } from '../../components/admin/users/UserGrowthChart';
import type { User } from '../../types/user';
import { mockUsers } from '../../data/mockUsers';
import toast from 'react-hot-toast';

export function AdminUsersPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState(mockUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showUserDetails, setShowUserDetails] = useState(false);

  const handleDeleteUser = (id: string) => {
    setUsers(users.filter(user => user.id !== id));
    if (selectedUser?.id === id) {
      setSelectedUser(null);
      setShowUserDetails(false);
    }
    toast.success('User deleted successfully');
  };

  const handleUpdateRole = (id: string, role: User['role']) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, role } : user
    ));
    if (selectedUser?.id === id) {
      setSelectedUser({ ...selectedUser, role });
    }
    toast.success('User role updated successfully');
  };

  const handleConnectToProfile = () => {
    if (selectedUser) {
      toast.success('Connecting to user profile...');
      navigate(`/profile/${selectedUser.id}`);
    }
  };

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setShowUserDetails(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader />
      
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">User Management</h2>
          <UserGrowthChart users={users} />
        </div>
        
        <UserTable
          users={users}
          onDeleteUser={handleDeleteUser}
          onUpdateRole={handleUpdateRole}
          onUserClick={handleUserClick}
        />

        <UserDetailsDialog
          user={selectedUser}
          isOpen={showUserDetails}
          onClose={() => setShowUserDetails(false)}
          onConnectToProfile={handleConnectToProfile}
        />
      </div>
    </div>
  );
}