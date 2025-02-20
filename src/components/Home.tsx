import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import StickySectionWrapper from "./StickySectionWrapper";
import RaizAppPhoto from "../assets/raiz-app-photo.png";
import RaizMarketingSitePhoto from "../assets/raiz-marketing-site.png";
import RaizBlogPhoto from "../assets/raiz-blog.png";
import ProjectItem from "./ProjectItem";
import Paragraph from "./wordEffect";
import { translation_en } from "../constants";
import { useMediaQuery } from "usehooks-ts";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  const lenis = useLenis();

  const isInView = useInView(ref, { amount: 0.8 });

  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    if (isInView && !isSmallScreen) {
      lenis?.scrollTo("#section");
    }
  }, [isInView, lenis, isSmallScreen]);

  return (
    <div className="h-[300vh]">
      <StickySectionWrapper className="bg-black font-oswald flex justify-center items-center flex-col overflow-hidden">
        <h1 className="text-8xl text-outline max-md:text-4xl">
          {translation_en.homePage.sectionOne.title}
        </h1>
        <h1 className="text-9xl text-white max-md:text-4xl">
          {translation_en.homePage.sectionOne.subtitle}
        </h1>
        <div className="absolute bottom-3 w-full flex">
          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee whitespace-nowrap">
              <span className="text-5xl text-white opacity-60 inline-block max-md:text-3xl">
                {translation_en.homePage.sectionOne.paragraph} &nbsp; &#8226;
                &nbsp;
              </span>
            </div>

            <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
              <span className="text-5xl text-white opacity-60 inline-block max-md:text-3xl">
                {translation_en.homePage.sectionOne.paragraph} &nbsp; &#8226;
                &nbsp;
              </span>
            </div>
          </div>
        </div>
      </StickySectionWrapper>
      <StickySectionWrapper className="bg-white font-onest flex justify-center gap-6 flex-col xl:px-44 lg:px-32 md:px-24 sm:px-16 px-6 text-left tracking-tight">
        <Paragraph
          paragraph={translation_en.homePage.sectionTwo.title}
          scrollOptions={{ offset: ["0.9 end", "4 end"] }}
          className="xl:text-4xl sm:text-2xl text-xl font-oswald uppercase font-semibold"
        />

        <Paragraph
          paragraph={translation_en.homePage.sectionTwo.subtitle}
          scrollOptions={{ offset: ["0.9 end", "4 end"] }}
          className="xl:text-4xl sm:text-2xl text-xl font-poppins"
        />

        <Paragraph
          className="xl:text-3xl sm:text-xl text-base tracking-normal leading-[1.2]"
          scrollOptions={{
            offset: isSmallScreen
              ? ["0.6 end", "1.1 end"]
              : ["0.6 end", "1.7 end"],
          }}
          paragraph={translation_en.homePage.sectionTwo.paragraph}
        />
      </StickySectionWrapper>
      <StickySectionWrapper className="bg-black text-white flex flex-col justify-center xl:px-44 lg:px-32 md:px-24 sm:px-16 px-6">
        <div className="flex flex-col items-start">
          <span className="md:text-5xl text-4xl font-semibold font-oswald mb-4">
            SELECTED PROJECT
          </span>
          <div className="flex justify-between group/items backdrop-blur-xl [&>:nth-child(n+2)]:max-xs:hidden [&>:nth-child(n+3)]:max-lg:hidden ">
            <ProjectItem src={RaizAppPhoto} />
            <ProjectItem src={RaizMarketingSitePhoto} />
            <ProjectItem src={RaizBlogPhoto} />
          </div>
          <button className="self-end mt-2 cursor-pointer bg-leftToRight duration-300 hover:text-black hover:pr-4 pl-4 font-onest">
            See More Project &nbsp; &nbsp; &#8250;
          </button>
        </div>
      </StickySectionWrapper>
    </div>
  );
}
