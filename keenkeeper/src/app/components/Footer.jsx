export default function Footer() {
  const socialIcons = [
    { name: 'Instagram', src: '/assets/instagram.png' },
    { name: 'Facebook', src: '/assets/facebook.png' },
    { name: 'Twitter', src: '/assets/twitter.png' }
  ];

  const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookies'];

  return (
    <footer className="bg-[#234235] text-white pt-24 pb-12 w-full mt-auto font-sans selection:bg-white selection:text-[#234235]">
      <div className="max-w-7xl mx-auto px-10 text-center flex flex-col items-center">
        {/* Brand Name - Figma Hubuhu Stylist without extra bold */}
        <h2 className="text-[48px] font-bold mb-4 tracking-tighter leading-none text-white">
          KeenKeeper
        </h2>
        
        {/* Description - Figma matched spacing */}
        <p className="text-[#A0AEC0] text-[15px] max-w-lg mb-12 leading-relaxed font-normal">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        
        {/* Social Section - Clean alignment as per Figma */}
        <div className="flex flex-col items-center mb-20 gap-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#718096]">Social Links</p>
          <div className="flex justify-center gap-8">
            {socialIcons.map((icon) => (
              <img 
                key={icon.name}
                src={icon.src} 
                alt={icon.name} 
                className="w-10 h-10 object-contain hover:opacity-70 transition-all cursor-pointer" 
              />
            ))}
          </div>
        </div>

        {/* Bottom Bar - Clean and Minimalist */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[11px] font-semibold text-[#718096] uppercase tracking-widest w-full">
          {/* Copyright */}
          <p className="mb-6 md:mb-0">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          
          {/* Legal Links */}
          <div className="flex gap-10">
            {legalLinks.map((link) => (
              <span 
                key={link} 
                className="hover:text-white cursor-pointer transition-colors duration-300"
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}