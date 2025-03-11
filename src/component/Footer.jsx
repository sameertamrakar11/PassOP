import React from "react";

const Footer = () => {
  return (
    <div >
      <footer className="bg-gray-800 text-white text-center py-4 w-full  bottom-0">
        <div className="flex justify-center items-center">
          &copy; 2025
          <div className="logo font-bold text-2xl">
            <span className="">&lt;</span>
            <span>Pass</span>
            <span className="">OP/&gt;</span>
          </div>
          | All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
