import {  NavLink, useParams } from "react-router";
import { cntData } from "../context/DataContext";

function Detail() {

  const {ad} = useParams();

  const {data} = cntData();
  
  const cntObj = data.find(item => item.alpha3Code === ad)

  return (
    <>
      <div className="dark:bg-gray-800 flex justify-center py-10">
        <div className="flex flex-col max-w-lg p-6 space-y-6  overflow-hidden rounded-lg shadow-2xl dark:bg-gray-900 dark:text-gray-50">
          <div>
            <img
              src={cntObj?.flag}
              alt=""
              className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
            />
            <h2 className="mb-1 text-xl font-semibold">{cntObj?.name}</h2>
           <NavLink to={`${cntObj.capital}`}>
             <p className="text-sm dark:text-gray-600">{cntObj?.region}</p>
           </NavLink>
          </div>
      </div>
      </div>
    </>
  );
}

export default Detail;
