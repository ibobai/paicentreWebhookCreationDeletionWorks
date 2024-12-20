import { format } from 'date-fns';
import { User, LogIn, Mail, Calendar, Shield } from 'lucide-react';
import type { User as UserType } from '../../../types/user';

interface UserDetailsProps {
  user: UserType;
  onConnectToProfile: () => void;
}

export function UserDetails({ user, onConnectToProfile }: UserDetailsProps) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-6 py-8 border-b border-gray-200">
        <div className="flex items-center">
          <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="h-10 w-10 text-gray-500" />
          </div>
          <div className="ml-6">
            <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="flex items-center text-gray-500 mb-2">
              <Shield className="h-5 w-5 mr-2" />
              Role
            </div>
            <p className="text-lg font-medium text-gray-900 capitalize">{user.role}</p>
          </div>
          <div>
            <div className="flex items-center text-gray-500 mb-2">
              <Calendar className="h-5 w-5 mr-2" />
              Member Since
            </div>
            <p className="text-lg font-medium text-gray-900">
              {format(new Date(user.createdAt), 'MMM d, yyyy')}
            </p>
          </div>
          <div>
            <div className="flex items-center text-gray-500 mb-2">
              <LogIn className="h-5 w-5 mr-2" />
              Last Login
            </div>
            <p className="text-lg font-medium text-gray-900">
              {user.lastLogin ? format(new Date(user.lastLogin), 'MMM d, yyyy HH:mm') : 'Never'}
            </p>
          </div>
          <div>
            <div className="flex items-center text-gray-500 mb-2">
              <Mail className="h-5 w-5 mr-2" />
              Email Verified
            </div>
            <p className="text-lg font-medium text-gray-900">Yes</p>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <button
            onClick={onConnectToProfile}
            className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <User className="h-5 w-5 mr-2" />
            Connect to User's Profile
          </button>
        </div>
      </div>
    </div>
  );
}