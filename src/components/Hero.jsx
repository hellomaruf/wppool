import hero_img1 from "../assets/Images/hero.png";
// import hero_img2 from "../assets/Images/hero2.png";

function Hero() {
  return (
    <div className="bg-[#2042B6] relative">
      <div className=" relative flex items-center justify-center flex-col max-w-4xl mx-auto p-16">
        <div className="absolute text-center space-y-2">
          <h1 className="  text-7xl font-play  text-white">The WPPOOL Index</h1>
          <p className=" text-2xl text-white">
            Monitor the performance of emerging, publicly traded, financial
            technology companies
          </p>
        </div>
        <img className="" src={hero_img1} alt="" />
      </div>

      {/* stats */}
      <div className=" flex flex-col gap-10 absolute bottom-16 left-16 ">
        <div className="">
          <h2 className="text-4xl font-semibold text-white font-play">60</h2>
          <p className="text-gray-300 text-base">Companies</p>
        </div>
        <div className="">
          <h2 className="text-4xl font-semibold text-white font-play">$100B</h2>
          <p className="text-gray-300 text-base">Market cap</p>
        </div>
        <div className="">
          <h2 className="text-4xl font-semibold text-white font-play">3.5x</h2>
          <p className="text-gray-300 text-base">Revenue multiple</p>
        </div>
        <div className="">
          <h2 className="text-4xl font-semibold text-white font-play">60%</h2>
          <p className="text-gray-300 text-base">
            LTM avg. revenue growth rate
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
