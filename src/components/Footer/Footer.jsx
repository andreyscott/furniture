// React
import React from "react";
import logo from "../../assets/img/logo.svg";


const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-black">
  <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
       
       {/* logo  */}
        <a href="/" className="flex mb-3 items-center justify-center">
          <img
            className="h-11 w-auto sm:h-10"
            src={logo}
            alt="Workflow"
          />
        </a>

        <p className="mt-4 md:max-w-xs text-base text-gray-300">
         The Furniture Standard knowned as the best place to buy your favorite products 
        </p>
          
                  <div className="mt-8 flex justify-center gap-6 text-gray-300">
          <a className="hover:opacity-75" href="/" target="_blank" rel="noreferrer">
            <span className="sr-only"> Facebook </span>

            <svg
              className="h-7 w-7 text-primary-100"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a className="hover:opacity-75" href="/" target="_blank" rel="noreferrer">
            <span className="sr-only"> Instagram </span>

            <svg
              className="h-7 w-7 text-primary-100"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a className="hover:opacity-75" href="/" target="_blank" rel="noreferrer">
            <span className="sr-only"> Twitter </span>

            <svg
              className="h-7 w-7 text-primary-100"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            
            >
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>       

        </div>
        
        <div className=" flex mt-5 justify-center items-center"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            className="flex-shrink-0 h-6 w-6 text-orange hover:animate-pulse"  >
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
          </svg>
  <a href="tel:07066800620" className="ml-3 text-orange text-3xl hover:text-primary-100">
          07066800620
            </a>
        </div>
      </div>
{/* here */}
      <div  className="grid grid-cols-1 gap-8 sm:grid-cols-2"  >
        <div>
          <p className="font-medium">Company</p>

          <nav
            aria-label="Footer Nav"
            className="mt-4 flex flex-col space-y-2 text-sm text-gray-300"
          >
            <a className="hover:opacity-75" href="/"> About </a>
            <a className="hover:opacity-75" href="/"> Meet the Team </a>
            <a className="hover:opacity-75" href="/"> History </a>
            <a className="hover:opacity-75" href="/"> Careers </a>
          </nav>
        </div>

        <div>
          <p className="font-medium">Services</p>

          <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-300">
            <a className="hover:opacity-75" href="/"> 1on1 Coaching </a>
            <a className="hover:opacity-75" href="/"> Company Review </a>
            <a className="hover:opacity-75" href="/"> Accounts Review </a>
            <a className="hover:opacity-75" href="/"> HR Consulting </a>
            <a className="hover:opacity-75" href="/"> SEO Optimisation </a>
          </nav>
        </div>
  </div>
  {/* next  */}
  <div   className="flex flex-col border-l-2 border-gray-200 pl-4" >
             <h4
              // style="color: #999; font-size: 20px;"
              className="text-orange text-2xl font-medium"
             >VISIT OUR SHOWROOMS</h4>
                            <div                         className="pl-4">
                                <ul 
                                      className="pt-3 pl-0 pr-0" >
                                    <li      className="text-primary-200 uppercase text-xl font-medium">

                  Main Showroom
                  {/* </br> */}
                                        <p  className="text-gray-300 cursor-pointer flex text-sm leading-4 py-3" > 
                  
                          <svg className="w-6 h-6 hover:animate-bounce text-red-800  mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                      </svg>
                                      51, Urubi Street, Benin City, <br/> Edo State
                                          </p>
                                    </li>
                                    <li  className="text-primary-200 uppercase text-xl font-medium">
                                                             Mission Road Showroom <br />
                                        <p className="flex cursor-pointer text-gray-300 text-sm leading-4 pt-3">
                                        <svg className="w-6 h-6 hover:animate-bounce text-red-800  mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                      </svg>
                                      27 Mission Rd, Avbiama 300102, <br/> Benin City
                                          </p>
                                    </li>
                                    <li  
                                        className="text-primary-200 uppercase text-xl font-medium">
                  Sapele Road Showroom <br />
                                        <p className="flex cursor-pointer text-gray-300 text-sm leading-4 pt-3">
                                        <svg className="w-6 h-6 hover:animate-bounce text-red-800  mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                      </svg>
                                      Suite 101, KU Plaza,, opposite PZ Road, Junction 300104,  <br/>  Benin City
                
                                         </p>
                                    </li>
                                </ul>

     

  </div>
  </div>
  </div>
  <p className=" text-xs mt-12 text-center bg-green-500 text-gray-300">
        ?? 2023, Created and design by
        <a href="https://andrey-profile.web.app/" className="text-primary-200 hover:underline">  Andrew </a>    
    </p>

  </div>

</footer>

  );
};

export default Footer;