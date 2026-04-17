"use client";

import React from 'react';
import { ChevronDown } from 'lucide-react'; 
import Footer from '../components/Footer';

// Define PNG icons path
const handshakeIcon = "/assets/handshake.png";
const textIcon = "/assets/text.png";
const videoIcon = "/assets/video.png";
const callIcon = "/assets/call.png";

// Dynamic interaction list
const timelineEvents = [
  { type: "Meetup", friend: "Tom Baker", date: "March 29, 2026", iconPath: handshakeIcon },
  { type: "Text", friend: "Sarah Chen", date: "March 28, 2026", iconPath: textIcon },
  { type: "Meetup", friend: "Olivia Martinez", date: "March 26, 2026", iconPath: handshakeIcon },
  { type: "Video", friend: "Aisha Patel", date: "March 23, 2026", iconPath: videoIcon },
  { type: "Meetup", friend: "Sarah Chen", date: "March 21, 2026", iconPath: handshakeIcon },
  { type: "Call", friend: "Marcus Johnson", date: "March 19, 2026", iconPath: callIcon },
  { type: "Meetup", friend: "Aisha Patel", date: "March 17, 2026", iconPath: handshakeIcon },
  { type: "Text", friend: "Olivia Martinez", date: "March 13, 2026", iconPath: textIcon },
  { type: "Call", friend: "Lisa Nakamura", date: "March 11, 2026", iconPath: callIcon },
  { type: "Call", friend: "Sarah Chen", date: "March 11, 2026", iconPath: callIcon },
  { type: "Video", friend: "Marcus Johnson", date: "March 6, 2026", iconPath: videoIcon },
  { type: "Video", friend: "Ryan O'Brien", date: "February 24, 2026", iconPath: videoIcon },
];

export default function Timeline() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen flex flex-col font-sans">
      <main className="flex-grow max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="flex flex-col gap-10">
          
          {/* Header Section */}
          <div>
            <h1 className="text-4xl font-black text-[#1A202C] mb-8 tracking-tighter">Timeline</h1>
            
            {/* Filter dropdown */}
            <div className="relative inline-block w-48">
              <select className="w-full h-11 bg-white border border-gray-100 rounded-xl px-4 text-xs font-semibold text-gray-500 appearance-none shadow-sm cursor-pointer hover:border-gray-200 transition-colors">
                <option>Filter timeline</option>
                <option>Meetup</option>
                <option>Text</option>
                <option>Call</option>
                <option>Video</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>

          {/* Timeline List */}
          <section className="flex flex-col gap-4">
            {timelineEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-50 flex items-center gap-6 hover:shadow-md transition-shadow">
                
                {/* Icon Container with PNG Image */}
                <div className="w-14 h-14 bg-[#F8F9FA] rounded-full flex items-center justify-center border border-gray-100 flex-shrink-0">
                  <img 
                    src={event.iconPath} 
                    alt={event.type} 
                    className="w-7 h-7 object-contain" 
                  />
                </div>
                
                {/* Event details */}
                <div className="flex-grow">
                  <p className="text-sm font-bold text-[#1A202C]">
                    {event.type} with <span className="font-bold text-gray-900">{event.friend}</span>
                  </p>
                  <p className="text-xs text-gray-400 font-medium">{event.date}</p>
                </div>
                
              </div>
            ))}
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}