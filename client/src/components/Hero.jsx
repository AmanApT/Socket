import { Link } from "react-router-dom";
import { rooms } from "../../constants";
import Bulb from "./Bulb";

const Hero = () => {
  return (
    <div className="flex relative bg-black  flex-col justify-center text-white h-screen ">
      <h1 className="text-3xl  text-center">Welcome To Chat Room</h1>
      <div className="flex flex-col gap-4 items-center mt-8 ">
        {rooms.map((eachRoom) => {
          return (
            <div
              key={eachRoom.roomId}
              className="bg-gray-800 hover:bg-gray-700 hover:scale-101 transition-all p-4 rounded-md my-2 flex items-center justify-between w-3/4"
            >
              <span>
                Room Name :{" "}
                <span className="text-blue-400"> {eachRoom.roomName}</span>
              </span>
              
              <Link to={`/chat/${eachRoom.roomId}`}>
                <button className="bg-black p-3 rounded-md cursor-pointer hover:bg-gray-900">
                  Join Room
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <Bulb />
    </div>
  );
};

export default Hero;
