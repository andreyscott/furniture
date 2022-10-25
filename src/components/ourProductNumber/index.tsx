import React from "react";

interface OurProductNumberProps {
  title: string;
  nums: string;
}

const data: Array<OurProductNumberProps> = [
  {
    title: "Year expreience",
    nums: "20+",
  },
  {
    title: "Happy Client",
    nums: "483",
  },
  {
    title: "Project Finish",
    nums: "150+",
  },
];

const OurProductNumber: React.FC = (props) => {
  return (
    <div 
  
    className="mt-9 flex gap-12 justify-end items-center lg:mr-4 w-full">
    
      {data.map((item, i) => {
        return (
          <div key={i} >
            <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary"
            >{item.nums}</h2>
            <p 
            className="text-gray-500 m-0 text-xl md:text-2xl">
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default OurProductNumber;

