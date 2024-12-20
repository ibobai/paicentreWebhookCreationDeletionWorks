import { useState, useMemo } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EventsTable } from '../../components/events/EventsTable';
import { EventsChart } from '../../components/events/EventsChart';
import { EventDetails } from '../../components/events/EventDetails';
import { EventsFilter } from '../../components/events/EventsFilter';
import { mockEvents } from '../../data/mockEvents';

export function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [provider, setProvider] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const filteredEvents = useMemo(() => {
    return mockEvents.filter(event => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        event.id.toLowerCase().includes(searchLower) ||
        (event.type || event.event_type || '').toLowerCase().includes(searchLower);

      // Provider filter
      const matchesProvider = provider ? event.provider === provider : true;

      // Date filter
      const eventDate = new Date(event.created * 1000 || event.create_time);
      const matchesStartDate = startDate ? eventDate >= startDate : true;
      const matchesEndDate = endDate ? eventDate <= endDate : true;

      return matchesSearch && matchesProvider && matchesStartDate && matchesEndDate;
    });
  }, [searchQuery, provider, startDate, endDate]);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <Link 
        to="/settings" 
        className="inline-flex items-center text-blue-600 hover:text-blue-700"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Settings
      </Link>

      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Received Events</h1>
        <div className="space-y-6">
          <EventsFilter
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            provider={provider}
            onProviderChange={setProvider}
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
          />
          <EventsChart events={filteredEvents} />
          <EventsTable 
            events={filteredEvents} 
            onEventClick={setSelectedEvent}
          />
        </div>
      </div>

      <EventDetails
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}