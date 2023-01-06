import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Home, Login, Register } from "./views";
import "./App.css";

const App = () => {
  return (
    <Suspense
      fallback={<div className="col text-center p-5 h1">Loading..</div>}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default App;
