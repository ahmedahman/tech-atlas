import styles from "../style";
import { logoB } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`flex justify-center items-center px-6 md:p-10 py-6 pb-0 lg:pb-2 flex-col bg-primary`}>
  <div className={`flex justify-center items-start lg:flex-row flex-col mb-8`}>
    <div className="flex flex-col justify-start xs:justify-center xs:items-center lg:h-[310px] md:h-[170px] h-[170px] lg:mr-3 mr-0 bg-footerbg lg:w-full lg:max-w-[27rem] p-2 lg:px-6 lg:pt-8 md:px-10 sm:px-8 px-6 rounded-[30px] object-contain">
      <img
        src={logoB}
        alt="hoobank"
        className="lg:w-[116.06px] lg:h-[109.22px] md:w-[106.06px] md:h-[60.22px] w-[70.06px] h-[50.22px] object-contain"
      />
      <p className={`text-[11px] leading-[20px] md:text-[14px] md:leading-[20px] lg:text-[16px] lg:leading-[28px] mt-8 xs:text-center`}>
        Future Map believes the <span className="font-bold">WORLD IS FULL WITH CREATIVITY</span>
        . They take a long-term view, leveraging technology, to leap Africa's economic growth.
      </p>
    </div>

    <div className="flex-[1] flex lg:flex-row justify-between flex-wrap xs:flex-col xs:justify-center xs:items-center xs:text-center w-full lg:w-full lg:h-[310px] h-auto lg:mt-0 mt-10 lg:px-8 p-4 bg-footerbg2 rounded-[30px]">
      {footerLinks.map((footerlink) => (
        <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px] px-4`}>
          <h4 className={`font-semibold text-[11px] leading-[15px] w-full md:text-[14px] md:leading-[20px] lg:text-[16px] lg:leading-[25px] text-white`}>
            {footerlink.title}
          </h4>
          <ul className="list-none mt-4">
            {footerlink.links.map((link, index) => (
              <li
                key={link.name}
                className={`font-normal lg:text-[14px] lg:leading-[28px] text-[10px] leading-[15px] text-white hover:text-black cursor-pointer ${
                  index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                }`}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="flex flex-row lg:mt-0 mt-11 xs:mt-3">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[18px] h-[18px] xs:w-[12px] xs:h-[12px] object-contain cursor-pointer lg:mt-10 lg:mr-5 ${
              index !== socialMedia.length - 1 ? "mr-5" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
      <p className={`font-normal text-dimWhite lg:text-[14px] lg:leading-[28px] text-[10px] leading-[20px] text-white hover:text-black cursor-pointer mt-10 pl-6 xs:pl-0`}>
        Copyright Ⓒ 2024 TECH ATLAS. All Rights Reserved.
      </p>

    </div>
  </div>
</section>

);

export default Footer;
