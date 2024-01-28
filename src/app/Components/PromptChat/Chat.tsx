import React from "react";

function Chat() {
  return (
    <div className="flex-1 h-full bg-secondBg w-full p-[20px] flex flex-col">
      <p className="text-buttonBG font-bold border-b-[0.5px] mb-2 pb-1 border-secondaryText">
        Chat GPT 3.5 Turbo
      </p>
      <div className="h-full flex flex-col">
        <div className="h-full">
          <div className="flex flex-col text-sm">
            <div className="flex items-end flex-col">
              <p className="text-white">You: </p>
              <p className="text-white pr-6">
                Find 10 Most Popular Milk Chocolate brands in california
              </p>
            </div>
            <div>
              <p className="text-white">LLM:</p>
              <p className="text-white pl-6">
                Find 10 Most Popular Milk Chocolate brands in california
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <input
            className="bg-secondaryText w-full rounded-sm px-2 text-white"
            type="text"
            name="question"
            id="question"
          />
        </div>
      </div>
    </div>
  );
}

export default Chat;
