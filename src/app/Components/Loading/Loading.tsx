import React from "react";

function Loading() {
  return (
    <div
      role="status"
      className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 bg-secondaryText w-full h-full bg-opacity-20 flex justify-center items-center"
    >
      <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-buttonBG"></div>
    </div>
  );
}

export default Loading;
