import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className="flex flex-col justify-between items-center w-full text-center pb-10 gap-0">
    <img src={icon} alt="star" className="w-[20px] h-[20px] sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px]" />
    <div className="flex-1 flex flex-col my-5">
      <h4 className="font-montserrat font-bold text-black text-[14px] sm:text-[18px] md:text-[23px] lg:text-[25px] leading-[23.4px] mb-3">
        {title}
      </h4>
      <p className={`font-normal text-[11px] leading-[20px] sm:text-[14px] sm:leading-[23px] lg:text-[16px] lg:leading-[28px] md:text-[14px] md:leading-[25px] lg:px-0 md:px-6 sm:px-[150px] px-[30px]`}>
        {content}
      </p>
    </div>
  </div>
);

const About = () =>  (
  <section id="about" className="px-6 rounded-[20px] relative">
  <div className={`relative grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 grid-cols-1 grid-rows-6 lg:gap-[90px] md:gap-[90px] flex-col border-solid`}>
    {features.map((feature, index) => (
      <FeatureCard key={feature.id} {...feature} index={index} />
    ))}
  </div>
  {/* Tic-tac-toe lines */}
  <div className="absolute top-0 left-0 w-full h-full">
    {/* Horizontal lines */}
    <div className="lg:absolute lg:inset-x-0 lg:top-1/2 lg:h-[1px] bg-gray-200" />
    {/* Vertical lines */}
    <div className="lg:absolute lg:left-1/3 lg:w-[0.7px] lg:h-full bg-gray-200" />
    <div className="lg:absolute lg:left-2/3 lg:w-[1px] lg:h-full bg-gray-200" />
  </div>
</section>
);

export default About;
