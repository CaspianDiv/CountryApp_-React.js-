import {  NavLink } from "react-router";

function Card({ name , flag , region , alpha3Code}) {
  return (
    <>
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 cursor-pointer">
        <img
          src={flag}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <NavLink to={`/details/${alpha3Code}`}>
                <h2 className="text-3xl font-semibold tracking-wide hover:underline">
                  {name}
                </h2>
            </NavLink>
            <p className="dark:text-gray-50">
              {region}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
