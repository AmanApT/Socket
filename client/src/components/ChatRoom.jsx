import { useParams } from "react-router-dom";
import { useState } from "react";
import ChatBubble from "./ChatBubble";

const ChatRoom = () => {
  const { roomId } = useParams();
  const [messages] = useState(["Hi", "Hi"]);
  const [text, setText] = useState("");

  
  return (
    <div className="customChatContainer h-screen text-white p-12 flex items-center justify-center">
      <div className=" rounded-md p-4 customChat  w-9/12">
        <h1 className="text-center text-2xl">
          Chat Room ID : <span className="text-blue-400"> {roomId}</span>
        </h1>
        <hr className="my-4" />
        <div className="flex flex-col justify-between ">
          <div className="overflow-y-scroll h-[65vh]">
            {messages?.map((eachMessage, index) => {
              return (
                <div key={index} className="m-3">
                  <ChatBubble />
                </div>
              );
            })}
          </div>
          <div className="flex justify-between m-4">
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 w-10/12 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type your message"
              required
            />

            <button className="rounded-lg  px-12 cursor-pointer py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
