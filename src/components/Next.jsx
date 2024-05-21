import { mapbg } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Next = () => (
  <section id="product" className={`grid md:py-10 py-6 justify-center max-w-screen-lg mx-auto mt-12 mb-0`}>
    <div className={`flex-1 flex justify-center items-center lg:flex-row flex-col`}>
      <div className="flex-col">
        <h2 className={`font-bold text-black w-full text-[20px] leading-[30px] sm:text-[30px] sm:leading-[35px] md:text-[40px] md:leading-[50px] lg:text-[45px] lg:leading-[55px]`}>
          Tech Atlas is ever-evolving.
        </h2>
        <p className={`font-normal text-dimWhite text-[11px] leading-[20px] sm:text-[15px] sm:leading-[25px] md:text-[14px] md:leading-[25px] lg:text-[16px] lg:leading-[26px] lg:max-w-[470px] mt-5`}>
          Tech Atlas is a game-changing web application designed to navigate the intricate landscape of modern technology with finesse and ease.
          <br /><br /><span className="py-10 text-secondary">Tech Atlas is an initiative of <span className="font-bold">FUTURE MAP</span>.</span><br /><br />
          Future Map mission to drive sustainable development, through several key initiatives. Firstly, we aim to establish programs that empower individuals with essential skills and digital literacy, equipping them to access employment opportunities in the ever-evolving digital age.
        </p>
        <button type="button" className={`py-[6px] px-5 font-montserrat font-medium text-[10px] sm:text-[15px] md:text-[15px] lg:text-[16px] text-white bg-secondary hover:text-secondary hover:bg-black rounded-full outline-none mt-6`}>
          Get Started
        </button>
      </div>
      <div className="relative2">
        <img src={mapbg} alt="map_of_nigeria" className="relative z-10 ml-2 mt-5 sm:pt-5 lg:w-[587px] lg:h-[390px] md:w-[600px] md:h-[400px] sm:w-[730px] sm:h-[420px] w-[730px] h-[220px]" />
      </div>
    </div>
  </section>
);

export default Next;
