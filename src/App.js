import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./Register/Register";
import Welcome from "./pages/Welcome/Welcome";
import Year from "./pages/year/Year";

const App = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/year/:id" element={<Year />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
