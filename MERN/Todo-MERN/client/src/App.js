import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Todolist from "./pages/Todos/Todolist";
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div >
    <Routes>
    <Route path="/" element={<Landing />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/register" element={<Register />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/todoList" element={<Todolist />}/>
    </Routes>
    <Toaster />
    </div>
  );
}

export default App;