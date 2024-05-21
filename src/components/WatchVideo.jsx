import { star } from "../assets";

const WatchVideo = () => (
    <div className={`flex justify-center items-center flex-col border-video border-[1.5px] lg:w-[222px] lg:h-[55px] rounded-full my-5 cursor-pointer md:w-[165px] md:h-[45px] w-[140px] h-[35px]`}>
      <div className={`flex justify-center flex-row items-center`}>
        <img src={star} alt="arrow-up" className="lg:w-[20px] lg:h-[20px] md:h-[17px] md:w-[17px] object-contain" />
        <p className={`font-normal text-dimWhite lg:leading-[28px] leading-[20px] lg:text-[16px] md:text-[13px] text-[11px] text-video px-2`}>
          Watch Video
        </p>
      </div>
    </div>
);

export default WatchVideo;
