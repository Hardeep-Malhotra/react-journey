import React from "react";
import LeftPageContent from "./LeftPageContent";
import { RightPageContent } from "./RightPageContent";

export const Page1Content = () => {
  return (
    <div className="  py-10 flex gap-10 h-[90vh]">
      <LeftPageContent />
      <RightPageContent />
    </div>
  );
};
