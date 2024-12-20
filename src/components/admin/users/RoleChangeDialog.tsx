import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Shield, X } from 'lucide-react';
import type { UserRole } from '../../../types/user';
import toast from 'react-hot-toast';

interface RoleChangeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (adminPassword: string) => void;
  userName: string;
  currentRole: UserRole;
  newRole: UserRole;
}

export function RoleChangeDialog({
  isOpen,
  onClose,
  onConfirm,
  userName,
  currentRole,
  newRole
}: RoleChangeDialogProps) {
  const [adminPassword, setAdminPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminPassword) {
      toast.error('Please enter admin password');
      return;
    }
    onConfirm(adminPassword);
    setAdminPassword('');
  };

  return (
    <Transition show={isOpen} as="div">
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Shield className="h-6 w-6 text-blue-600 mr-2" />
                    <Dialog.Title className="text-lg font-medium">
                      Confirm Role Change
                    </Dialog.Title>
                  </div>
                  <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      You are about to change <span className="font-medium">{userName}</span>'s role from{' '}
                      <span className="font-medium capitalize">{currentRole}</span> to{' '}
                      <span className="font-medium capitalize">{newRole}</span>.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Admin Password
                    </label>
                    <input
                      type="password"
                      required
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter your admin password to confirm"
                    />
                  </div>

                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                      Confirm Change
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}