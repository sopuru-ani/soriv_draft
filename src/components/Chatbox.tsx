import React from "react";

function Chatbox() {
  return (
    <>
      <div className="pointer-events-none fixed top-0 left-0 z-40 h-dvh w-dvw p-10">
        <button
          type="button"
          aria-label="Open AI chat"
          className="pointer-events-auto absolute right-10 bottom-10 size-16 bg-primary transition hover:bg-secondary [mask:url('/chat-smile-ai.svg')_center_/_contain_no-repeat] [-webkit-mask:url('/chat-smile-ai.svg')_center_/_contain_no-repeat]"
        />
      </div>
    </>
  );
}

export default Chatbox;
