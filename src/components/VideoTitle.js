const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 bg-gradient-to-r from-black to-transparent text-white">
      <h1 className="text-3xl md:text-6xl font-bold mb-4">{title}</h1>
      <p className="text-sm md:text-lg mb-6 md:w-1/2">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-white py-2 px-4 md:py-2 md:px-8 text-sm md:text-xl text-black rounded-lg hover:bg-gray-300">
          Play
        </button>
        <button className="bg-gray-400 py-2 px-4 md:py-2 md:px-8 text-sm md:text-xl text-white rounded-lg opacity-75 hover:opacity-100">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
