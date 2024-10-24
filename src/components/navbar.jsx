// import React, { useState } from "react";

const Navbar = ({
    navItemsClasses,
    totalCounters,
    formatCounters,
    navItems,
  }) => {
    return (
      <header className="flex items-center justify-between py-4 px-4 ">
        <div className="flex items-center gap-[2rem]">
          {/* Left Section */}
          <div className="bg-[url('https://websitedemos.net/childcare-blog-02/wp-content/uploads/sites/760/2021/01/site-template-logo.svg')] bg-cover bg-no-repeat py-[20px] px-[80px] "></div>
          {/* Middle Section */}
          <div className="middle flex items-center">
            <ul className="flex gap-[0.8rem] p-0 m-0 list-none">
              {navItems.map((item) => (
                <li key={item.name} className={navItemsClasses}>
                  {item.name}
                </li>
              ))}
  
              <li className={navItemsClasses}>
                {totalCounters > 0 ? `${totalCounters}` : ""} {formatCounters()}
              </li>
            </ul>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="right">
          <button className="rounded-[0.2rem] text-black py-[0.6rem] px-[1.5rem] border border-black hover:bg-blue-500 hover:text-white transition-colors duration-300">
            Search
          </button>
        </div>
      </header>
    );
  };
  
  export default Navbar;
  