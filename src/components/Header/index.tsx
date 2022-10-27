import React from 'react'


// import Head form data
// import { Head } from '../../data/Contact
 const Heading = () => {
  return (
   
    <div className="md:flex hidden justify-between items-center text-sm py-2 border-b border-gray-200 bg-gray-100 h-8 mx-2 "
    >
     <div>
 
       <p  style={{ margin: 0 }}
       className="text-gray-500 text-base font-medium"
       >
        <a className='mr-1' href="tel: +234 803 000 0000">+234 803 000 0000</a>
        /

        {/* example@gmail.com  */}
        <a  className='ml-1' href="mailto:example@gmail.com">
            example@gmail.com
            </a>
        
         </p>

     </div>
    
     <div>
     <div>
     
         <span className=' text-xs py-1'>OPEN MONDAY TO SATURDAY <br/> FROM 8:AM TO 6:PM </span>
     </div>
     <div>
     
 </div>
        </div>
 </div>
  )
}
export default Heading;