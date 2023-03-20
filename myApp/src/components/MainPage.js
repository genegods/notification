import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import {IoMdCheckmarkCircle} from 'react-icons/io'
import {AiOutlineClose} from 'react-icons/ai'

function MainPage() {
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress < 100 ? prevProgress + 10 : prevProgress
        );
      }, 500);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsActive(false);
        setProgress(0);
      }, 1000);
    }
  }, [progress]);

  const handleButtonClick = () => {
    setIsActive(true);
  };
  const handleCloseButton = () => {
    setIsActive(false);
  };

  return (
    <React.Fragment>
      <main>
        <div className="bg-purple-500 h-96 mt-14 centered flex-col space-y-10 md:w-6/12 md:mx-auto">
          <div className="">
            
            <button
              onClick={handleButtonClick}
              className="bg-white px-5 py-2 rounded-lg"
            >
              show notification
            </button>
          </div>

          {/* notification section */}
          <div>
            { isActive &&

              
              <div className="relative ">
          <div className="w-60 h-10 shadow grid grid-cols-6">
            <div className=" centered bg-green-200">
              <IoMdCheckmarkCircle className="text-2xl text-green-500"/>
            </div>
            <div className="bg-green-800 col-span-5 text-xs flex justify-between items-center px-2 text-white ">
              <p>Custom notification!</p>
              <AiOutlineClose  onClick={handleCloseButton}/>
            </div>
          </div>

          {/* progress section */}
          <div className="absolute top-7">
            <progress
              className="red w-60 h-1 rounded-full"
              value={progress}
              max="100"
              />
          </div>
              </div>
            }

          </div>
          
          
        </div>
      </main>
    </React.Fragment>
  );
}

export default MainPage;
