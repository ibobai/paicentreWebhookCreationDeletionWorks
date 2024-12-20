import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bell, X } from 'lucide-react';
import { EventsTable } from './EventsTable';
import { EventsChart } from './EventsChart';
import { EventDetails } from './EventDetails';
import { mockEvents } from '../../data/mockEvents';

export function EventsDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

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
              <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Bell className="h-6 w-6 text-blue-600 mr-2" />
                    <Dialog.Title className="text-lg font-medium">
                      Received Events
                    </Dialog.Title>
                  </div>
                  <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  <EventsChart events={mockEvents} />
                  <EventsTable 
                    events={mockEvents} 
                    onEventClick={setSelectedEvent}
                  />
                </div>

                <EventDetails
                  event={selectedEvent}
                  isOpen={!!selectedEvent}
                  onClose={() => setSelectedEvent(null)}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}