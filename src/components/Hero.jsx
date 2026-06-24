import { useEffect, useRef } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

function Hero({ inpStatus , setInpStatus , setInpValue}) {

  const inpRef = useRef();

  useEffect(() => {
    if (inpStatus) {
        inpRef.current.focus()
    }
  },[inpStatus])

  function handleInp() {
    setInpStatus(!inpStatus)
  };

  return (
    <>
      <section className="dark:bg-gray-800 bg-[#FAFAFA] dark:text-gray-50">
        <div className="mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32">
          <h1 className="text-[2.4rem] font-bold leading-none">
              Welcome to Country App Website
          </h1>
          <p className="px-8 pt-5 mb-12 text-xl font-bold text-[#7F22FE]">
            You can find any data of any country in this website.
          </p>
          <div className="flex flex-wrap justify-center">
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-600 text-white dark:text-gray-50">
              HAVE A LOOK
            </button>
            <button onClick={handleInp} className="px-20 py-3 m-2 cursor-pointer text-lg bg-violet-600 text-white rounded dark:text-white  dark:bg-black">
              Search
            </button>
          </div>
            { inpStatus &&
              <div className="relative">
              <HiMagnifyingGlass className="absolute left-2 top-14" size={22} />
              <input ref={inpRef} onChange={(e) => setInpValue(e.target.value)} placeholder="Search any country" type="search" className="outline-none mt-10 shadow-[3px_2px_20px_0px] px-10 py-3 rounded w-90" />
            </div>}
        </div>
      </section>
    </>
  );
}

export default Hero;
