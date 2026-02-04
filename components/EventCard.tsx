
import React from 'react';
import { MapPin, Clock, Calendar as CalIcon, ArrowRight } from 'lucide-react';
import { Event } from '../types';
import { format } from 'date-fns';

interface EventCardProps {
  event: Event;
  onClick: (event: Event) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  return (
    <div 
      onClick={() => onClick(event)}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-charcoal/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={event.imageUrl || `https://picsum.photos/seed/${event.id}/600/400`} 
          alt={event.title}
          className="w-full h-full object-cover nano-banana-img group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white ${
            event.type === 'Prayer' ? 'bg-primary' : 
            event.type === 'Social' ? 'bg-gold' : 
            event.type === 'Study' ? 'bg-blue-600' : 'bg-green-600'
          }`}>
            {event.type}
          </span>
        </div>
      </div>
      
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
          <CalIcon size={14} />
          {format(event.start, 'EEEE, MMM do')}
        </div>
        
        <h3 className="font-heading text-lg font-bold text-charcoal leading-tight group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        
        <p className="text-sm text-charcoal/60 line-clamp-2">
          {event.description}
        </p>
        
        <div className="pt-2 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-charcoal/80 text-sm">
            <MapPin size={16} className="text-gold" />
            <span className="font-medium">{event.parishName}</span>
          </div>
          <div className="flex items-center gap-2 text-charcoal/80 text-sm">
            <Clock size={16} className="text-gold" />
            <span>{format(event.start, 'h:mm a')}</span>
          </div>
        </div>

        <div className="pt-2 flex items-center text-primary text-sm font-bold group">
          View Details
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};
