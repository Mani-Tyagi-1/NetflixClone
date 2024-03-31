import React from "react";

function Footer() {
  return (
    <div className="w-full h-[30rem] bg-black p-24 pl-[13rem]">
      <div className="w[80%] text-slate-400 text-[1.1rem]">
        <p className="mb-10">
          Questions? Call <a className="underline ">{"000-800-919-1694"}</a>
        </p>

        <div className="flex space-x-[10rem] underline r mb-6">
          <div className="flex flex-col space-y-[1rem] ">
            <a className="cursor-pointer">FAQ</a>
            <a className="cursor-pointer">Investor Relations</a>
            <a className="cursor-pointer"> Privacy</a>
            <a className="cursor-pointer"> Speed Test</a>
          </div>
          <div className="flex flex-col space-y-[1rem] ">
            <a className="cursor-pointer">Help Centre</a>
            <a className="cursor-pointer">Jobs</a>
            <a className="cursor-pointer">Cookie Preferences</a>
            <a className="cursor-pointer">Legal Notices</a>
          </div>
          <div className="flex flex-col space-y-[1rem] ">
            <a className="cursor-pointer">Account</a>
            <a className="cursor-pointer">Ways to Watch</a>
            <a className="cursor-pointer">Corporate Information</a>
            <a className="cursor-pointer">Only on Netflix</a>
          </div>
          <div className="flex flex-col space-y-[1rem] ">
            <a className="cursor-pointer">Media Centre</a>
            <a className="cursor-pointer">Terms of Use</a>
            <a className="cursor-pointer">Contact Us</a>
          </div>
        </div>

        {/* Button */}
        <div
          className="h-[2.3rem] w-[9rem] flex  bg-[rgba(40,39,39,0.3)] border-[1px] border-gray-400 text-white  items-center pl-3 rounded-[4px]
          "
        >
          <div className="pr-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="default-ltr-cache-4z3qvp e1svuwfo1"
              data-name="Languages"
              aria-labelledby=":R135dajalalbd:"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <div className="flex w-full h-full pl-1 pr-4 ">
            <select className="w-full h-full bg-transparent outline-none ">
              <option className=" text-black">English</option>
              <option className=" text-black">Hindi</option>
            </select>
          </div>
        </div>

        <p className="mt-6">Netflix India</p>
      </div>
    </div>
  );
}

export default Footer;
