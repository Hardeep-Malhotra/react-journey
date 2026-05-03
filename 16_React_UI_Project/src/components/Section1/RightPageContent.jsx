import React from "react";
import { RightCard } from "./RightCard";

export const RightPageContent = (props) => {
  return (
    <div className="h-full flex-nowrap flex overflow-hidden gap-10 rounded-4xl  p-6 w-2/3 ">
      {props.users.map((user, index) => {
        return (
          <RightCard
            key={index}
            img={user.img}
            intro={user.intro}
            tag={user.tag}
            index={index}
          />
        );
      })}
    </div>
  );
};
