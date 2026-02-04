
import React from 'react';
import { X, MapPin, Clock, Calendar as CalIcon, Share2, ArrowRight, Sun, Thermometer, Wind, Footprints, CalendarPlus, Map, Info } from 'lucide-react';
import { Event } from '../types';
import { format } from 'date-fns';

interface EventModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, isOpen, onClose }) => {
  if (!event || !isOpen) return null;

  const handleOpenMaps = () => {
    const query = encodeURIComponent(`${event.parishName}, ${event.address}, ${event.city}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const handleAddToCalendar = () => {
    const startTime = event.start.toISOString().replace(/-|:|\.\d+/g, "");
    const endTime = event.end.toISOString().replace(/-|:|\.\d+/g, "");
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `URL:${window.location.href}`,
      `DTSTART:${startTime}`,
      `DTEND:${endTime}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.parishName}, ${event.address}, ${event.city}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\n");

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.title.replace(/\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isHike = event.tags.some(tag => tag.toLowerCase().includes('hike') || tag.toLowerCase().includes('hiking'));
  const isBeach = event.tags.some(tag => tag.toLowerCase().includes('beach'));
  const isOutdoor = isHike || isBeach || event.tags.some(tag => ['Outdoors', 'Active'].includes(tag));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-charcoal/90 backdrop-blur-xl"
        onClick={onClose}
      />
      
      <div className="relative bg-background w-full max-w-5xl rounded-[3rem] md:rounded-[4.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 fade-in duration-500">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 md:top-8 md:right-8 z-30 p-3 bg-white/80 backdrop-blur rounded-full text-charcoal hover:bg-white transition-colors shadow-lg"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
          {/* Image Sidebar */}
          <div className="md:w-[40%] h-64 md:h-auto relative">
            <img 
              src={event.imageUrl || `https://picsum.photos/seed/${event.id}/800/800`} 
              alt={event.title}
              className="w-full h-full object-cover nano-banana-img grayscale brightness-75 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 right-12 space-y-2">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gold block">
                {event.county} Regional Event
              </span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.85] uppercase tracking-tighter">
                {event.title}
              </h2>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="md:w-[60%] p-8 md:p-14 lg:p-20 flex flex-col minimalist-scrollbar overflow-y-auto bg-background">
            
            {/* Main Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-charcoal/30 uppercase tracking-[0.3em] flex items-center gap-2">
                  <CalIcon size={12} className="text-primary" /> When
                </p>
                <p className="text-charcoal font-black text-xl md:text-2xl leading-tight uppercase tracking-tight">
                  {format(event.start, 'EEEE, MMM do')}
                </p>
                <div className="flex items-center gap-2 text-charcoal/50 font-bold text-sm">
                  <Clock size={16} />
                  {format(event.start, 'h:mm a')} — {format(event.end, 'h:mm a')}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-black text-charcoal/30 uppercase tracking-[0.3em] flex items-center gap-2">
                  <MapPin size={12} className="text-gold" /> Where
                </p>
                <p className="text-charcoal font-black text-xl md:text-2xl leading-tight uppercase tracking-tight">
                  {event.parishName}
                </p>
                <p className="text-charcoal/50 font-bold text-sm">
                  {event.address}, {event.city}
                </p>
              </div>
            </div>

            {/* Description Section */}
            <div className="space-y-6 mb-12">
               <div className="h-1 w-20 bg-primary/20 rounded-full" />
               <p className="text-charcoal/80 leading-relaxed text-lg md:text-xl font-medium tracking-tight italic">
                "{event.description}"
               </p>
               <div className="flex flex-wrap gap-2">
                 {event.tags.map(tag => (
                   <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-primary/70 bg-primary/5 border border-primary/10 px-4 py-1.5 rounded-full">
                     #{tag}
                   </span>
                 ))}
               </div>
            </div>

            {/* Outdoor Activity Specifics */}
            {isOutdoor && (
              <div className="mb-12 p-8 rounded-[3rem] bg-accent/20 border border-gold/10 space-y-6 animate-in slide-in-from-bottom-4 duration-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-gold font-black uppercase tracking-widest text-[11px]">
                    <Info size={16} />
                    {isHike ? 'Trail Guide' : isBeach ? 'Beach Guide' : 'Outdoor Essentials'}
                  </div>
                  <div className="bg-white/50 px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-charcoal/40">
                    Activity specific
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {isHike && (
                    <>
                      <div className="flex items-center gap-4 text-charcoal/70 text-sm font-bold">
                        <Footprints size={18} className="text-primary shrink-0" />
                        Robust trail shoes required
                      </div>
                      <div className="flex items-center gap-4 text-charcoal/70 text-sm font-bold">
                        <Thermometer size={18} className="text-primary shrink-0" />
                        Bring 2L water + snacks
                      </div>
                      <div className="flex items-center gap-4 text-charcoal/70 text-sm font-bold">
                        <Sun size={18} className="text-primary shrink-0" />
                        Difficulty: Moderate
                      </div>
                    </>
                  )}
                  {isBeach && (
                    <>
                      <div className="flex items-center gap-4 text-charcoal/70 text-sm font-bold">
                        <Sun size={18} className="text-primary shrink-0" />
                        Sunscreen & Hat advised
                      </div>
                      <div className="flex items-center gap-4 text-charcoal/70 text-sm font-bold">
                        <Wind size={18} className="text-primary shrink-0" />
                        Coastal layers for wind
                      </div>
                      <div className="flex items-center gap-4 text-charcoal/70 text-sm font-bold">
                        <Map size={18} className="text-primary shrink-0" />
                        Locate our flag on the sand
                      </div>
                    </>
                  )}
                  {!isHike && !isBeach && (
                    <>
                      <div className="flex items-center gap-4 text-charcoal/70 text-sm font-bold">
                        <Thermometer size={18} className="text-primary shrink-0" />
                        Check weather forecast
                      </div>
                      <div className="flex items-center gap-4 text-charcoal/70 text-sm font-bold">
                        <Share2 size={18} className="text-primary shrink-0" />
                        Notify group upon arrival
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Sticky/Bottom Actions */}
            <div className="flex flex-col gap-4 mt-auto pt-8 border-t border-charcoal/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={handleOpenMaps}
                  className="w-full bg-primary text-white py-6 rounded-3xl font-black text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-2xl shadow-primary/30 active:scale-95"
                >
                  Get Directions <ArrowRight size={20} />
                </button>
                <button 
                  onClick={handleAddToCalendar}
                  className="w-full bg-charcoal text-white py-6 rounded-3xl font-black text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-charcoal/90 transition-all hover:scale-[1.02] shadow-xl active:scale-95"
                >
                  <CalendarPlus size={20} /> Add to Calendar
                </button>
              </div>
              <button 
                className="w-full border-2 border-charcoal/10 text-charcoal/60 py-5 rounded-3xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-charcoal/5 transition-all"
              >
                <Share2 size={18} />
                Share with Friends
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
