import React from 'react'

function InputSection() {
    return (
      <div>
        <input
          name="myInput"
          placeholder="Email Address"
          className=" h-[4rem] lg:w-[25rem] md:w-[25rem] w-[30rem] border-[1px] border-white bg-[rgba(70,70,93,0.3)] rounded-md mt-3 mr-3 p-3 "
        />
      </div>
    );
}

export default InputSection;