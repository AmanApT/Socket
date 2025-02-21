import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import ChatRoom from "./components/ChatRoom";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/chat/:roomId" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
