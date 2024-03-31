import React from 'react'

function StartBtn() {
    return (
      <div className="h-[4rem] w-[15rem] mt-3 bg-[rgb(237,23,23)] text-white  rounded-md font-bold text-[1.7rem] flex items-center justify-center space-x-1 hover:bg-[rgb(190,34,34)]">
        <button>Get Started</button>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-mirrorinrtl="true"
          class="default-ltr-cache-4z3qvp e1svuwfo1"
          data-name="ChevronRight"
          aria-labelledby=":r3:"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    );
}

export default StartBtn;