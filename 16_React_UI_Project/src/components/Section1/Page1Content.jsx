import React from "react";
import LeftPageContent from "./LeftPageContent";
import { RightPageContent } from "./RightPageContent";

export const Page1Content = () => {
  return (
    <div className="  py-10 flex justify-between h-[90vh]  bg-amber-800">
      <LeftPageContent />
      <RightPageContent />
    </div>
  );
};
