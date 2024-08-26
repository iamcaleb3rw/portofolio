import React from "react";
import WordPullUp from "./magicui/word-pull-up";

function Title() {
  return (
    <div className="p-3 max-w-[600px]">
      {/* <div >
        
      </div> */}
      <WordPullUp
        className="text-3xl md:text-4xl lg:text-5xl tracking-tighter font-semibold text-left"
        words="Junior Front-end Engineer & web designer"
      />
    </div>
  );
}

export default Title;
