import { useState } from "react";
import Card from "./Card";
import Loader from "./Loader";
import Hero from "./Hero";
import RandomCard from "./RandomCard";
import { useParams } from "react-router";
import { cntData } from "../context/DataContext";
import Error from "../pages/Error";
import { IoIosArrowUp } from "react-icons/io";

function Main() {

  const {data , error , loader} = cntData();

  const {region} = useParams();

  const [inpStatus , setInpStatus] = useState(false);
  const [inpValue , setInpValue] = useState("");
  const  regArr = [...new Set(data.map(item => item.region))];

  const isHave = regArr.some(item => item === region);  

  if (!loader) {
    return <Loader />
  }

  if (!isHave && region || error ) {
    return <Error />
  };

  function handleUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  return (
    <>
      {
        !region && <Hero inpStatus={inpStatus} setInpStatus={setInpStatus} setInpValue={setInpValue} />
      }

      { !inpStatus && !region && <RandomCard data={data} /> } 
     <div className="flex flex-wrap justify-center gap-5 items-center py-7 dark:bg-gray-800">
            {
              data
              .filter(item => inpValue ? item.name.toLowerCase().includes(inpValue.toLowerCase()) : item)
              .filter(item => region ? item.region === region : item)
              .map((item , i) => <Card key={i} {...item} />)
            }
       </div>
       <div className="relative">
            <div onClick={handleUp} className="fixed bottom-10 p-3 bg-gray-500 rounded-full cursor-pointer text-white hover:bg-gray-300 hover:text-black transition-colors duration-200 right-10">
                <IoIosArrowUp size={25} />
            </div>
       </div>
    </>
  );
}

export default Main;
