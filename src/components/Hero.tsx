const Hero = () => {
  return (
    <div className="relative pt-20 pb-12 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#2a7fff] via-[#0ea5e9] to-[#22d3ee] bg-clip-text text-transparent">
          Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300">
          Bc. Volodymyr Symchych — Solutions Architect & Technical Project Manager
        </p>
      </div>
    </div>
  );
};

export default Hero;
