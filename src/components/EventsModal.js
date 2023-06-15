import React, { useState, useEffect } from 'react';

const EventsModal = ({ closeModal }) => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3000/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Failed to fetch events data:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-lg p-4 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={closeModal}
          aria-label="Close"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-4">
          <div className="flex items-center mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events"
              className="bg-gray-100 appearance-none border-2 border-gray-200 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="max-h-60 overflow-y-auto">
            {filteredEvents.length > 0 ? (
              <div>
                <h2 className="text-xl font-semibold mb-2">Events</h2>
                <ul className="space-y-2">
                  {filteredEvents.map((event) => (
                    <li key={event.id} className="flex items-center space-x-4">
                      <img
                        src={event.photo}
                        alt={event.title}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <span className="text-gray-800">{event.title}</span>
                        <p className="text-gray-500 text-sm">Hosted by: {event.host}</p>
                        <p className="text-gray-500 text-sm">
                          Attendees: {event.attendees.length}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-gray-600">No events found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsModal;
