import React from "react";

function Context() {
  return (
    <div className="text-white flex flex-col gap-1 items-center text-sm pb-4">
      <p>Filled Context Window</p>
      <div className="flex gap-2 items-center">
        <span>30</span>

        <div className="w-72 bg-secondaryText rounded-full h-2">
          <div className="bg-white h-2 rounded-full w-[25%]"></div>
        </div>

        <span>1280</span>
      </div>
    </div>
  );
}

export default Context;
