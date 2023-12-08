import React from 'react'

function StepperControll() {
  return (
    <>
      <div className="container flex justify-around mt-4 mb-8">
        {/*back button  */}
        <button className="px-4 py-2 font-medium text-white uppercase bg-green-600 cursor-pointer rounded-xl">
          back
        </button>
        {/* next button*/}
        <button className="px-4 py-2 font-medium text-white uppercase bg-green-600 cursor-pointer rounded-xl">
          next
        </button>
      </div>
    </>
  );
}

export default StepperControll