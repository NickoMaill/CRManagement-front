import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Homepage from "./views/Homepage";
import Login from "./views/Login";
import Register from "./views/Register";


export default function App() {
  return (
    <>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}
