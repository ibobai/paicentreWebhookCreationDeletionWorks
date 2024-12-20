import { useState } from 'react';
import { format } from 'date-fns';
import { Trash2, Shield } from 'lucide-react';
import type { User } from '../../../types/user';
import { DeleteUserDialog } from './DeleteUserDialog';
import { RoleChangeDialog } from './RoleChangeDialog';
import toast from 'react-hot-toast';

interface UserRowProps {
  user: User;
  onDelete: (id: string) => void;
  onUpdateRole: (id: string, role: User['role']) => void;
  onClick: () => void;
}

export function UserRow({ user, onDelete, onUpdateRole, onClick }: UserRowProps) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showRoleDialog, setShowRoleDialog] = useState(false);
  const [newRole, setNewRole] = useState<User['role']>(user.role);

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const role = e.target.value as User['role'];
    setNewRole(role);
    setShowRoleDialog(true);
  };

  const handleRoleChangeConfirm = (adminPassword: string) => {
    if (adminPassword === 'admin111995') {
      onUpdateRole(user.id, newRole);
      setShowRoleDialog(false);
      toast.success('Role updated successfully');
    } else {
      toast.error('Invalid admin password');
    }
  };

  const handleDeleteConfirm = (adminPassword: string) => {
    if (adminPassword === 'admin111995') {
      onDelete(user.id);
      setShowDeleteDialog(false);
      toast.success('User deleted successfully');
    } else {
      toast.error('Invalid admin password');
    }
  };

  const getRoleColor = (role: User['role']) => {
    switch (role) {
      case 'admin':
        return 'bg-red-100 text-red-800';
      case 'editor':
        return 'bg-blue-100 text-blue-800';
      case 'accountant':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <tr
        className="hover:bg-gray-50 cursor-pointer transition-colors"
        onClick={onClick}
      >
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                <Shield className="h-5 w-5 text-gray-500" />
              </div>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">{user.name}</div>
              <div className="text-sm text-gray-500">{user.email}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <select
            value={user.role}
            onChange={handleRoleChange}
            onClick={(e) => e.stopPropagation()}
            className={`px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(user.role)} border-0 cursor-pointer focus:ring-2 focus:ring-offset-2`}
          >
            <option value="user">User</option>
            <option value="editor">Editor</option>
            <option value="accountant">Accountant</option>
            <option value="admin">Admin</option>
          </select>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            user.status === 'active'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {user.status}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {format(new Date(user.createdAt), 'MMM d, yyyy')}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {user.lastLogin ? format(new Date(user.lastLogin), 'MMM d, yyyy HH:mm') : 'Never'}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowDeleteDialog(true);
            }}
            className="text-red-600 hover:text-red-900"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </td>
      </tr>

      <DeleteUserDialog
        isOpen={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={handleDeleteConfirm}
        userName={user.name}
      />

      <RoleChangeDialog
        isOpen={showRoleDialog}
        onClose={() => setShowRoleDialog(false)}
        onConfirm={handleRoleChangeConfirm}
        userName={user.name}
        currentRole={user.role}
        newRole={newRole}
      />
    </>
  );
}