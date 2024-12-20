import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';

interface EventDetailsProps {
  event: any;
  isOpen: boolean;
  onClose: () => void;
}

export function EventDetails({ event, isOpen, onClose }: EventDetailsProps) {
  if (!event) return null;

  return (
    <Transition show={isOpen} as="div">
      <Dialog onClose={onClose} className="relative z-[60]">
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
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Dialog.Title className="text-lg font-medium">
                    Event Details
                  </Dialog.Title>
                  <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <pre className="bg-gray-50 p-4 rounded-lg overflow-auto max-h-[60vh]">
                  <code className="text-sm">
                    {JSON.stringify(event, null, 2)}
                  </code>
                </pre>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}