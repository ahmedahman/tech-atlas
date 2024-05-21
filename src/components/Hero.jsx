import styles from "../style";
import { futuremap, map1 } from "../assets";
import WatchVideo from "./WatchVideo";

const Hero = () => (
  <section id="home" className={`flex lg:flex-col flex-col md:py-10 py-6 pt-2`}>
    <div className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-col justify-between items-center w-full text-center py-4 mt-6">
        <p className={`font-normal text-dimWhite text-[12px] leading-[20px] sm:text-[14px] sm:leading-[20px] md:text-[16px] md:leading-[25px] lg:text-[18px] lg:leading-[28px] text-paragraph pb-3`}>Smart information finder, made for All.</p>
        <h1 className={`font-bold text-[28px] leading-[35px] sm:text-[35px] sm:leading-[40px] md:text-[40px] md:leading-[50px] md:pt-2 lg:text-[50px] lg:leading-[62px] lg:pt-2 text-black`}>
          Get access to <br />{" "} 
          <div className="relative">
            <p>
              I<span className="relative z-10">nformatio</span>n at a go!
            </p>
          </div> 
        </h1>
      </div>

      <div className="flex flex-col justify-between items-center w-full text-center">
        <div className="flex flex-row items-center py-[7px] bg-secondary2 rounded-full mb-2 border-y-black border-[1px] w-100%]">
          <p className={`font-normal text-dimWhite text-[12px] leading-[20px] sm:text-[12px] sm:leading-[20px] md:text-[13px] lg:text-[18px] lg:leading-[28px] ml-2`}>
            <span className="text-black">Explore the great work done at</span>
          </p>
          <img src={futuremap} alt="futuremap" className="w-[95px] h-[20px] md:w-[163.95px] md:h-[28.22px] ml-2" />
        </div>

        <div className="flex lg:mr-4 mr-0">
          <WatchVideo />
        </div>
      </div>
    </div>

    <div className={`flex-1 flex justify-center items-center lg:my-0 my-3 ss:py-0 relative`}>
      <img src={map1} alt="locations" className="lg:w-[770px] lg:h-[600px] md:w-[600px] md:h-[500px] sm:w-[400px] sm:h-[300px] w-[350px] h-[250px] relative z-[5]" />
    </div>
  </section>
);

export default Hero;
