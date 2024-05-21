import { FMbg } from "../assets";
import styles, { layout } from "../style";

const Connect = () => (
  <section className={`grid md:py-10 py-6 pt-0`}>
    <div className="relative">
      <img src={FMbg} alt="futuremap" className="w-auto lg:h-[614px] h-auto" />
        
        <div className="absolute top-0 left-0 right-0 lg:bottom-[350px] flex flex-col justify-center items-center text-center">
          
          <div className="flex flex-row items-center lg:mt-[100px] md:mt-[30px] lg:py-[10px] lg:px-8 md:p-2 sm:py-2 px-4 mb-2 sm:mt-7 bg-secondary rounded-full border-y-black border-x-white border-[1px] xs:mt-3">
            <p className={`font-normal text-white lg:text-[18px] lg:leading-[28px] text-[9px] leading-[15px] sm:text-[14px] md:text-[16px] ml-2`}>
              Smart information finder, made for All.
            </p>
          </div>

          <h1 className={`font-bold text-[14px] leading-[18px] sm:text-[24px] sm:leading-[34px] md:text-[27px] md:leading-[35px] md:pt-2 lg:text-[45px] lg:leading-[62px] lg:pt-2 text-center text-white px-3`}>Help Increase People's Access To <br />Digital Information!</h1>

          <button className="font-montserrat font-medium cursor-pointer lg:text-[15px] md:text-[14px] sm:text-[13px] text-[8px] lg:mt-6 mt-1 lg:px-9 lg:py-3 md:px-5 md:py-2 sm:px-5 sm:py-2 md:mt-3 sm:mt-3 px-3 py-[6px] xs:mt-3 bg-white text-secondary rounded-full hover:bg-black hover:text-white">Submit Data</button>
        </div>
    </div>
  </section>
);
export default Connect;
