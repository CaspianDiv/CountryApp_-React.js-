import { createContext, useContext, useEffect, useState } from "react";
import getAllCountries from "../service/CountryServices";

const CountryData = createContext();

function DataContext({ children }) {

const [data , setData] = useState([]);
const [error , setError] = useState(null);
const [loader , setLoader] = useState(false);

  useEffect(() => {
    getAllCountries()
    .then(item => setData(item))
    .catch(err => setError(err))
    .finally(() => setLoader(true))
  },[]);
  
  const cntObj = {
      data,
      error,
      loader
  };

  return (
    <>
        <CountryData.Provider value={cntObj}>
            {children}
        </CountryData.Provider>
    </>
  )
};


export function cntData() {
    return useContext(CountryData)
};

export default DataContext
