import React from "react";
import camera from "../../../public/camera.png";

const Bcon = () => {
  return (
    <div>
      <div className="md:grid-cols-3 grid gap-4">
        <div>
          <div>
            <div className="card  bg-gray-300  text-primary-content my-3">
              <div className="card-body">
                <p className="">audio speakers</p>
                <p>Wireless Audio System Multrioom 360</p>
                <div className="">
                  <img className="object-cover" src={camera} alt="avater" />
                </div>
                <h1 className="text-xl"> $ 2,299.00 </h1>
              </div>
            </div>
          </div>
          <div>
            <div className="card  bg-gray-300  text-primary-content">
              <div className="card-body">
                <p className="">audio speakers</p>
                <p>Wireless Audio System Multrioom 360</p>
                <div className="">
                  <img className="object-cover" src={camera} alt="avater" />
                </div>
                <h1 className="text-xl"> $ 2,299.00 </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" row-span-1 ">
          <div className="card grow h-[99%]  bg-gray-300  text-primary-content my-3">
            <div className="card-body">
              <p className="h-16">audio speakers</p>
              <p>Wireless Audio System Multrioom 360</p>
              <div className="">
                <img className="object-cover" src={camera} alt="avater" />
              </div>
              <div className="flex xl:my-40 md:my-24  lg:my-32">
                <div className="flex-1">
                <img className="object-cover" src={camera} alt="avater" />
                </div>
                <div className="flex-1">
                <img className="object-cover" src={camera} alt="avater" />
                </div>
                <div className="flex-1">
                <img className="object-cover" src={camera} alt="avater" />
                </div>      
                <div className="flex-1">
                
                </div>        
              </div>
              <h1 className="text-xl"> $ 2,299.00 </h1>
            </div>
        </div>
        </div>
        <div>
          <div>
            <div className="card  bg-gray-300  text-primary-content my-3">
              <div className="card-body">
                <p className="">audio speakers</p>
                <p>Wireless Audio System Multrioom 360</p>
                <div className="">
                  <img className="object-cover" src={camera} alt="avater" />
                </div>
                <h1 className="text-xl"> $ 2,299.00 </h1>
              </div>
            </div>
          </div>
          <div>
            <div className="card  bg-gray-300  text-primary-content">
              <div className="card-body">
                <p className="">audio speakers</p>
                <p>Wireless Audio System Multrioom 360</p>
                <div className="">
                  <img className="object-cover" src={camera} alt="avater" />
                </div>
                <h1 className="text-xl"> $ 2,299.00 </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bcon;
