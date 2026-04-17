"use client";

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import Footer from '../components/Footer';

const data = [
  { name: 'Text', value: 30, color: '#8B5CF6' },
  { name: 'Call', value: 45, color: '#1E3A32' },
  { name: 'Video', value: 25, color: '#38A169' },
];

export default function FriendshipAnalytics() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen flex flex-col font-sans">
      <main className="flex-grow max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl font-black text-[#1A202C] tracking-tighter">Friendship Analytics</h1>
          <div className="bg-white p-12 rounded-[40px] shadow-sm border border-gray-50 flex flex-col min-h-[500px]">
            <h3 className="text-sm font-bold text-gray-500 mb-10 uppercase tracking-widest">By Interaction Type</h3>
            <div className="flex-grow flex items-center justify-center">
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie data={data} cx="50%" cy="45%" innerRadius={80} outerRadius={120} paddingAngle={8} dataKey="value" stroke="none">
                    {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                  <Legend verticalAlign="bottom" height={36} iconType="circle" formatter={(value) => <span className="text-xs font-bold text-gray-500 mx-2">{value}</span>} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}