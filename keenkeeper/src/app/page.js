"use client";
import { useState, useEffect } from "react";
import Link from "next/link"; 
import Footer from "./components/Footer"; 

export default function Dashboard() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="bg-[#F8F9FA] min-h-screen flex flex-col">
      <div className="flex-grow max-w-7xl mx-auto pt-16 pb-24 px-6 font-sans">
        <div className="text-center mb-12">
          <h1 className="text-[48px] font-bold text-[#1A202C] tracking-tight leading-tight mb-4">
            Friends to keep close in your life
          </h1>
          <p className="text-gray-500 text-sm max-w-none mx-auto mb-10 font-medium whitespace-nowrap">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
          <button className="bg-[#234235] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#1a3228] transition-all cursor-pointer">
            + Add a Friend
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {[
            { label: "Total Friends", value: friends.length },
            { label: "On Track", value: friends.filter(f => f.status === 'on-track').length },
            { label: "Need Attention", value: friends.filter(f => f.status === 'overdue').length },
            { label: "Interactions This Month", value: "12" }
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center cursor-pointer hover:shadow-md transition-shadow"
            >
              <p className="text-4xl font-bold text-[#234235] mb-1">{item.value}</p>
              <p className="text-[10px] text-gray-700 uppercase font-bold tracking-widest">{item.label}</p>
            </div>
          ))}
        </div>

        <hr className="border-t border-gray-200 mb-12" />

        <h2 className="text-xl font-bold text-[#1A202C] mb-8">Your Friends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {friends.map((friend) => (
           
            <Link href={`/friend/${friend.id}`} key={friend.id} className="block no-underline">
              <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-50 text-center hover:shadow-md transition-all group cursor-pointer h-full">
                <img src={friend.picture} className="w-20 h-20 rounded-full mx-auto mb-5 object-cover ring-[10px] ring-[#F8F9FA] group-hover:ring-white transition-all" alt={friend.name} />
                <h3 className="font-bold text-lg text-[#1A202C] mb-1">{friend.name}</h3>
                <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider mb-5">62D AGO</p>
                
                <div className="flex justify-center gap-1.5 mb-6">
                  {friend.tags.map(tag => (
                    <span key={tag} className="bg-[#E6FFFA] text-[#319795] text-[8px] px-2.5 py-0.5 rounded font-bold uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={`py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest text-white ${
                  friend.status === 'overdue' ? 'bg-[#FF4D4D]' : 
                  friend.status === 'almost due' ? 'bg-[#F6AD55]' : 'bg-[#38A169]'
                }`}>
                  {friend.status}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}