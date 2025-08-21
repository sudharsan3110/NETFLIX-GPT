const Videotitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[12%] md:pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black/90 via-black/60 to-transparent">
      <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
        {title}
      </h1>
      <p className="mt-4 md:mt-5 text-sm md:text-base max-w-[90%] md:max-w-[28rem] text-white/90 line-clamp-2 md:line-clamp-3">
        {overview}
      </p>
      <div className="mt-4 md:mt-6 flex items-center gap-3">
        <button className="inline-flex items-center gap-2 bg-white text-black font-semibold text-sm md:text-base px-4 md:px-6 py-2 md:py-2.5 rounded-md hover:bg-white/90 active:bg-white transition">
          <span>▶️</span>
          <span>Play</span>
        </button>
        <button className="inline-flex items-center gap-2 bg-white/20 text-white font-semibold text-sm md:text-base px-4 md:px-6 py-2 md:py-2.5 rounded-md hover:bg-white/30 active:bg-white/20 backdrop-blur-sm transition">
          <span>ℹ️</span>
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default Videotitle;
