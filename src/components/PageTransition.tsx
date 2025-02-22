export interface PageProps {
  pagekey: string;
}

export const PageTransition = ({ pagekey }: PageProps) => {
  console.log(pagekey);

  return (
    <></>
    // <motion.div
    //   key={pagekey}
    //   initial={{ y: "100%" }}
    //   animate={{ y: "-100%" }}
    //   transition={{ delay: 0, duration: 5 }}
    //   className="fixed w-dvw h-dvh bg-black"
    // ></motion.div>
  );
};
