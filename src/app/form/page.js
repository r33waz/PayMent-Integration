"use client";
import { useState } from "react";
import Paymnet from "../components/steps/payment";
import UserDetails from "../components/steps/userDetail";
import Stepper from "../components/stepper";
import StepperControll from "../components/steppercontroller";

function MultiForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Add Details", "Payment"];

  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <UserDetails />;
      case 2:
        return <Paymnet />;
      default:
    }
  };

  return (
    <>
      <div className="pb-2 mx-auto bg-white shadow-lg md:w-1/2 rounded-bl-2xl">
        <div className="container mt-5 horizontal">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>
        <StepperControll />
      </div>
    </>
  );
}

export default MultiForm;
