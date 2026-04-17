import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen flex flex-col items-center justify-center font-sans text-center px-6">
      
      <div className="text-[120px] font-black leading-none tracking-tighter">
        <span className="text-[#8B5CF6]">4</span>
        <span className="text-[#38A169]">0</span>
        <span className="text-[#1E3A32]">4</span>
      </div>

      <h2 className="text-2xl font-black text-[#1A202C] mt-4 tracking-tight">
        Page not found
      </h2>
      <p className="text-sm text-gray-400 font-medium mt-2 max-w-xs">
  
      </p>

      <Link 
        href="/"
        className="mt-8 px-6 py-3 bg-[#1E3A32] text-white text-sm font-bold rounded-2xl hover:opacity-90 transition-opacity"
      >
        Go Home
      </Link>

    </div>
  );
}