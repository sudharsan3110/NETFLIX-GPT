import { IMAGE_URL } from "../utils/constants";

const Moviecard = ({ posterpath, originaltitle }) => {
  if (!posterpath) return null;
  return (
    <div className="group relative bg-black flex-shrink-0 pr-4">
      <div className="w-[300px] h-[150px] gap-2 overflow-hidden rounded-xl ring-1 ring-white/10 hover:ring-white/30 shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 ease-out bg-black/30">
        <img
          src={IMAGE_URL + posterpath}
          alt={originaltitle || "Movie poster"}
          className="h-full w-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
          <p className="text-sm md:text-base font-semibold text-white truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            {originaltitle || "Untitled"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Moviecard;
