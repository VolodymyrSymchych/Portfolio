import { Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
        <div className="flex gap-8 text-center md:text-left">
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-[#2a7fff] to-[#22d3ee] bg-clip-text text-transparent">
              15+
            </div>
            <div className="text-sm text-neutral-400">Projektů</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-[#22d3ee] to-[#10b981] bg-clip-text text-transparent">
              2+
            </div>
            <div className="text-sm text-neutral-400">Let zkušeností</div>
          </div>
        </div>

        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/volodymyr-symchych"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://github.com/volodymyr-symchych"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
