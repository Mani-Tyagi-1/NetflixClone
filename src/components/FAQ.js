import React from "react";
import { useState } from "react";

function FAQ(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[75%]  h-auto mx-auto flex flex-col justify-between items-center">
      <div
        className="  w-full h-[5.8rem] bg-[rgb(37,36,36)] flex justify-between hover:bg-[rgb(56,54,54)] cursor-pointer  text-white p-[1.5rem] m-1 relative"
              onClick={() => setOpen(!open)}
      >
        <h1 className="text-[1.75rem] font-bold">{props.ques}</h1>

        <div>
          {!open ? (
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1"
              data-name="Plus"
              aria-labelledby=":R2dakq6kqjamh:"
              alt=""
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                fill="currentColor"
              ></path>
            </svg>
          ) : (
            <div className="rotate-45">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="elj7tfr3 e164gv2o4 default-ltr-cache-1javmrk e1svuwfo1"
                data-name="Plus"
                aria-labelledby=":rd0:"
                alt=""
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          )}
        </div>
      </div>

      {open && (
        <div className=" w-full h-auto  bg-[rgb(37,36,36)] flex  text-[1.5rem] text-white p-4">
          <p>{props.ans}</p>
        </div>
      )}
    </div>
  );
}

export default FAQ;
