import React from 'react'

import OurProductNumber from '../ourProductNumber'

const OurProducts = () => {
    return (
        <section className="section overflow-hidden relative lg:min-h-[540px]">
        <div className=" mx-auto">
            <div className="flex mx-3 flex-col md:flex-row">
            <div className="flex flex-col lg:mr-4 md:w-1/2 items-baseline gap-x-6 mb-6 lg:mb-0">
                <h2 className=" text-lg lg:text-xl mb-3 text-primary-100   lg:mt-[30px]">
                Our Products
                </h2>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl mb-3 text-black lg:mb-8">
          Crafted by talented and high quality material
  </h3>
                <p className="text-sm sm:text-base leading-9 md:text-lg max-w-lg pr-3 lg:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                aliquam, nisl eget consequat aliquet, est nisl fermentum velit, at
                efficitur nisl nunc ut orci. Fusce aliquam, nisl eget consequat
                aliquet, est nisl fermentum velit, at efficitur nisl nunc ut orci.
                </p>
                <div className="flex flex-col w-full items-center sm:items-start">
             {/* learn more button full width green background when active transitions */}
                {/* <Link to="/"> */}
                    <button className="bg-green-700 hover:bg-green-600 w-full md:w-60 lg:w-52 h-12 mx-4 md:mx-0 text-white text-base font-semibold sm:text-base md:text-lg lg:text-xl xl:text-2xl py-2 px-4 rounded-md">
                    Learn More
                    </button>
                {/* </Link> */}
<div className="hidden mt-10 md:flex">
                <img 
                src="https://images.pexels.com/photos/220749/pexels-photo-220749.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Furniture"
                className="w-[570px] h-80" />
                </div>
            </div>
            </div>

            <div className="flex flex-col md:w-1/2 items-center">
                <OurProductNumber /> 
                <img
                src="https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Furniture"
                className="w-[600px] h-96 mt-20" />
                </div>

         
            </div>
        </div>
        </section>
    )
    }
    
    export default OurProducts
    
    // Path: src\components\ourProducts\index.tsx
    // Compare this snippet from src\components\Home\newInStore\new-in-store.tsx:
    // import { newInStore } from '../../../data'
    // import {Link} from 'react