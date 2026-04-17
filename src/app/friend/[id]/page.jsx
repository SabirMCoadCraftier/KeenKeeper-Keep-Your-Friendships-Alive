"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { 
  Clock, 
  Target, 
  CalendarClock, 
  BellRing, 
  Archive, 
  Trash2, 
  Phone, 
  MessageSquareText, 
  Video, 
  History, 
  Pencil, 
  Users 
} from 'lucide-react';
import Footer from '../../components/Footer'; 

const interactionIcons = {
  Text: MessageSquareText,
  Meetup: Users,
  Video: Video,
};

const recentInteractions = [
  { type: "Text", desc: "Asked for career advice", date: "Jan 28, 2026" },
  { type: "Meetup", desc: "Industry conference meetup", date: "Jan 28, 2026" },
  { type: "Video", desc: "Asked for career advice", date: "Jan 28, 2026" },
  { type: "Text", desc: "Asked for career advice", date: "Jan 28, 2026" },
];

export default function FriendDetails() {
  const params = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    const fetchFriendData = async () => {
      try {
        const response = await fetch('/friends.json');
        const data = await response.json();
        const foundFriend = data.find(f => f.id.toString() === params.id);
        setFriend(foundFriend);
      } catch (error) {
        console.error("Error fetching friend data:", error);
      }
    };

    if (params.id) {
      fetchFriendData();
    }
  }, [params.id]);

  if (!friend) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
        <p className="text-xl font-bold text-gray-400">Loading friend profile...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F9FA] min-h-screen flex flex-col font-sans">
      <main className="flex-grow max-w-7xl mx-auto px-10 pt-16 pb-24 w-full">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <aside className="w-full lg:w-[320px] flex-shrink-0">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 text-center flex flex-col items-center sticky top-24">
              <img 
                src={friend.picture} 
                className="w-24 h-24 rounded-full object-cover mb-6 ring-[12px] ring-[#F8F9FA]" 
                alt={friend.name} 
              />
              <h1 className="font-bold text-2xl text-[#1A202C] mb-2 tracking-tight"> {friend.name} </h1>
              
              <div className="flex gap-2 mb-4">
                <span className={`text-white text-[9px] px-3 py-1 rounded-full font-black uppercase tracking-wider ${friend.status === 'overdue' ? 'bg-[#FF4D4D]' : 'bg-[#38A169]'}`}> 
                  {friend.status} 
                </span>
                {friend.tags && friend.tags.map((tag, index) => (
                  <span key={index} className="bg-[#E6FFFA] text-[#319795] text-[9px] px-3 py-1 rounded-full font-black uppercase tracking-wider"> 
                    {tag} 
                  </span>
                ))}
              </div>
              
              <p className="text-gray-400 text-[13px] italic mb-8 leading-relaxed">
                "Specialized in {friend.tags ? friend.tags[0] : 'Networking'}"
              </p>
              
              <div className="w-full flex flex-col gap-3">
                <button className="w-full flex items-center justify-center gap-2 bg-[#F7FAFC] hover:bg-gray-100 text-gray-700 py-3.5 rounded-2xl text-[10px] font-bold uppercase tracking-widest border border-gray-50 transition-all">
                  <BellRing size={14} /> Snooze 2 Weeks
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-[#F7FAFC] hover:bg-gray-100 text-gray-700 py-3.5 rounded-2xl text-[10px] font-bold uppercase tracking-widest border border-gray-50 transition-all">
                  <Archive size={14} /> Archive
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-[#FFF5F5] hover:bg-red-50 text-[#C53030] py-3.5 rounded-2xl text-[10px] font-bold uppercase tracking-widest border border-red-50 transition-all">
                  <Trash2 size={14} /> Delete
                </button>
              </div>
            </div>
          </aside>

          <section className="flex-grow flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Days Since Contact", value: "62", icon: Clock },
                { label: "Goal (Days)", value: "30", icon: Target },
                { label: "Next Due", value: "Feb 27, 2026", icon: CalendarClock },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-50 text-center">
                  <p className="text-4xl font-black text-[#234235] mb-2">{stat.value}</p>
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-50 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#1A202C]">Relationship Goal</h3>
                <p className="text-sm text-gray-500">Connect every <span className="font-bold text-gray-800">30 days</span></p>
              </div>
              <button className="bg-[#F7FAFC] p-3 rounded-xl text-gray-500 hover:bg-gray-100 transition-all">
                <Pencil size={18} />
              </button>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1A202C] mb-6">Quick Check-In with {friend.name}</h3>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: "Call", icon: Phone },
                  { label: "Text", icon: MessageSquareText },
                  { label: "Video", icon: Video },
                ].map((check, i) => (
                  <button key={i} className="bg-white py-10 rounded-[32px] shadow-sm border border-gray-50 hover:border-[#234235] transition-all flex flex-col items-center group">
                    <check.icon className="w-8 h-8 text-[#234235] mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{check.label}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-50">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-bold text-[#1A202C]">Recent Interactions</h3>
                <button className="flex items-center gap-2 bg-[#F7FAFC] px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  <History size={14} /> Full History
                </button>
              </div>
              
              <div className="space-y-8">
                {recentInteractions.map((inter, i) => {
                  const Icon = interactionIcons[inter.type];
                  return (
                    <div key={i} className="flex items-center gap-6">
                      <div className="bg-[#F7FAFC] p-4 rounded-full">
                        <Icon className="w-5 h-5 text-[#234235]" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-bold text-[#1A202C]">{inter.type}</p>
                        <p className="text-xs text-gray-500">{inter.desc}</p>
                      </div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{inter.date}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}