const ChatBubble = ({text}) => {
  return (
    <div className="flex mr-0 items-start gap-2.5 text-white">
      <img
        className="w-8 h-8 rounded-full object-fit"
        src="https://rukminim2.flixcart.com/image/850/1000/xif0q/painting/d/j/k/12-1-kanha-ji-010-71-12-9-gilariya-store-original-imagtrazv9h7zfnb.jpeg?q=90&crop=false"
        alt="Jese image"
      />
      <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 py-2 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold  text-blue-400 ">
            User
          </span>
         
        </div>
        <p className="text-sm font-normal py-1.5">
          {" "}
          {text}
        </p>
      </div>
    </div>
  );
};

export default ChatBubble;
