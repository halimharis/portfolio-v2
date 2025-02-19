export default function Footer() {
  return (
    <div
      className="relative h-[400px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[400px] w-full flex items-center justify-center ">
        <div className="flex flex-col gap-2">
          <span className="font-oswald text-6xl">KNOW MORE ABOUT ME</span>
          <div className="w-full h-1 bg-black"></div>
          <div className="flex justify-between">
            <span>PROFILE</span>
            <span>MY JOURNEY</span>
            <span>MY PROJECT</span>
            <span>CONTACT ME</span>
          </div>
        </div>
      </div>
    </div>
  );
}
