import videobg from "../../../public/videos/178501-860033423_small.mp4";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <video
          src={videobg}
          autoPlay
          loop
          muted
          className="w-full h-[250px] md:h-[330px] lg:h-[500px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 font-bold">
          <h1 className="text-2xl md:text-4xl lg:text-7xl">Welcome</h1>
          <p className="text-2xl md:text-4xl lg:text-7xl">to</p>
          <h1 className="text-2xl md:text-4xl lg:text-7xl">Smart Lab</h1>
          <br />
          <p className=" font-normal lg:font-bold">
            The Fusion of Bio-Sensors and Machine Learning.
          </p>
          <p className=" font-normal lg:font-bold">
            Smarter Sensors, Smarter Solutions: Merging Biology with AI.
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
