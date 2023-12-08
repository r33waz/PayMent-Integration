"use client";
import React, { useEffect, useRef, useState } from "react";

function Stepper({ steps, currentStep }) {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps
  };

  useEffect(() => {
    // Create objects
    const stepsState = steps.map((step, index) => ({
      description: step,
      completed: false,
      highlighted: index === 0 ? true : false,
      selected: index === 0 ? true : false,
    }));

    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "flex items-center w-full"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center ">
          <div className={`flex items-center justify-center w-12 h-12 py-3 transition duration-500 ease-in-out border-2 border-green-600 rounded-full ${step.selected?"bg-green-600 text-white font-bold":""}`}>
                    {/* Display number */}
                    {step.completed?(<span className="text-xl font-bold text-white">a</span>):(index + 1)}
          </div>
          <div className="absolute top-0 w-32 mt-16 text-xs font-medium text-center text-green-600 uppercase">
            description{/* Display description */}
          </div>
        </div>
        <div className="flex-auto transition duration-200 ease-in-out border-t-2">
          {/* Display line */}
        </div>
      </div>
    );
  });
  return (
    <div className="flex items-center justify-between py-4 mx-4">
      {displaySteps}
    </div>
  );
}

export default Stepper;
