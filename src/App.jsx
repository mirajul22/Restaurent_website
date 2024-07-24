import { Route, Routes } from "react-router-dom";
import Nav from "./components/navigation/Nav";
import Home from "./components/home/Home";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
