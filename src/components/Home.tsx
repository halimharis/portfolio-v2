import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import StickySectionWrapper from "./StickySectionWrapper";
import RaizAppPhoto from "../assets/raiz-app-photo.png";
import RaizMarketingSitePhoto from "../assets/raiz-marketing-site.png";
import RaizBlogPhoto from "../assets/raiz-blog.png";
import ProjectItem from "./ProjectItem";
import { TypingEffect } from "./typingEffect";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  const lenis = useLenis();

  const isInView = useInView(ref, { amount: 0.8 });

  useEffect(() => {
    if (isInView) {
      console.log(lenis?.scrollTo("#section"));
    }
  }, [isInView, lenis]);

  const marqueeText =
    "A FRONTEND ENGINEER. A BACKEND ENGINEER. A DESIGNER AND A FULLSTACK WEBSITE DEVELOPER.";

  return (
    <div className="h-[300vh]">
      <StickySectionWrapper className="bg-black font-oswald flex justify-center items-center flex-col overflow-hidden">
        <h1 className="text-8xl text-outline ">ABDUL HARIS HALIM</h1>
        <h1 className="text-9xl text-white ">SOFTWARE DEV.</h1>
        <div className="absolute bottom-3 left-5 w-full flex">
          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee whitespace-nowrap">
              <span className="text-5xl text-white opacity-60 inline-block">
                {marqueeText} &nbsp; &#8226; &nbsp;
              </span>
            </div>

            <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
              <span className="text-5xl text-white opacity-60 inline-block">
                {marqueeText} &nbsp; &#8226; &nbsp;
              </span>
            </div>
          </div>
        </div>
      </StickySectionWrapper>
      <StickySectionWrapper className="bg-white font-onest flex justify-center gap-6 flex-col px-44 text-left tracking-tight">
        <TypingEffect text="Hello There!" className="text-5xl font-semibold " />

        <TypingEffect
          text="Halim, Abdul, or maybe Haris, Call me Anything!"
          className="text-5xl"
          delay={0.1}
        />

        <TypingEffect
          className="text-[44px] tracking-normal leading-[1.2]"
          text="I'm a web developer with a passion for ui design and animation. I love
          crafting beautiful and engaging user interfaces. I find it incredibly
          rewarding to build interfaces that are both beautiful and functional.
          Don't get me wrong though, I also know my way around the back-end, so
          I can handle the full web development process."
          delay={0.2}
        />
      </StickySectionWrapper>
      <StickySectionWrapper className="bg-black text-white flex flex-col justify-center px-64 ">
        <div className="flex flex-col items-start">
          <span className="text-5xl font-semibold font-oswald mb-4">
            SELECTED PROJECT
          </span>
          <div className="flex justify-between group/items backdrop-blur-xl">
            <ProjectItem src={RaizAppPhoto} />
            <ProjectItem src={RaizMarketingSitePhoto} />
            <ProjectItem src={RaizBlogPhoto} />
          </div>
          <button className="self-end mt-2 cursor-pointer bg-leftToRight duration-300 hover:text-black hover:pr-4 pl-4 rounded-sm font-onest">
            See More Project &nbsp; &nbsp; &#8250;
          </button>
        </div>
      </StickySectionWrapper>
    </div>
  );
}
