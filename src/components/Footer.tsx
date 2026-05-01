export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-obsidian border-t border-ivory/10 pt-16 pb-8 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-serif font-bold tracking-tighter text-ivory mb-2">TW.</span>
          <p className="text-ivory/40 text-sm font-light">Thiran Thathsara A. Wijesingha</p>
        </div>

        <div className="flex items-center space-x-6 text-sm font-medium tracking-wide uppercase">
          <a href="mailto:thiranwije123@gmail.com" className="text-ivory/60 hover:text-gold transition-colors">Email</a>
          <a href="https://github.com/skpthiran" target="_blank" rel="noopener noreferrer" className="text-ivory/60 hover:text-gold transition-colors">GitHub</a>
          <a href="tel:+94787283974" className="text-ivory/60 hover:text-gold transition-colors">Phone</a>
        </div>

      </div>
      
      <div className="container mx-auto max-w-7xl mt-16 pt-8 border-t border-ivory/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-ivory/40 uppercase tracking-widest">
        <p>&copy; {currentYear} All rights reserved.</p>
        <p>Designed and built by Thiran Wijesingha</p>
      </div>
    </footer>
  );
}
