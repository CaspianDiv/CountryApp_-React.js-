import { useEffect, useState } from "react";
import { NavLink } from "react-router";

function RandomCard({ data }) {
  const [country, setCountry] = useState({});

  useEffect(() => {
    if (data.length) {
      function getRndNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const rndNum = getRndNum(0, data.length - 1);

      setCountry(data[rndNum]);
    }
  }, [data]);

  return (
    <div className="dark:bg-gray-800 flex flex-wrap justify-center">
      <div className="flex flex-wrap gap-10  p-10 overflow-hidden rounded-lg dark:bg-gray-900 dark:text-gray-50">
        <div>
          <img
            src={country?.flag}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />
        </div>
        <div className="flex flex-col gap-5">
          <NavLink to={`/details/${country.alpha3Code}`}>
            <h2 className="mb-1 text-xl font-semibold">{country?.name}</h2>
          </NavLink>
          <p className="text-sm dark:text-[#7F22FE] underline">{country?.region}</p>
          <p className="text-sm">Capital: {country?.capital}</p>
          <p className="text-sm">Area: {country?.area} km <sup>2</sup></p>
          <p className="text-sm">Population: {country?.population}</p>
        </div>
      </div>
    </div>
  );
}

export default RandomCard;
