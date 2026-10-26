import React from "react";

function Chatbox() {
  return (
    <>
      <div className="pointer-events-none fixed top-0 left-0 z-40 h-dvh w-dvw p-10">
        <button
          type="button"
          aria-label="Open AI chat"
          className="group pointer-events-auto absolute right-10 bottom-10 flex size-16 cursor-pointer items-center justify-center rounded-full bg-white shadow-md ring-1 ring-border transition hover:shadow-lg"
        >
          <span
            aria-hidden
            className="size-9 bg-primary transition group-hover:bg-secondary [mask:url('/chat-smile-ai.svg')_center_/_contain_no-repeat] [-webkit-mask:url('/chat-smile-ai.svg')_center_/_contain_no-repeat]"
          />
        </button>
      </div>
    </>
  );
}

export default Chatbox;
