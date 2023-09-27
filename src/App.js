import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Welcome from "./pages/Welcome/Welcome";
import Year from "./pages/year/Year";
import { BaseUrl } from "./config/apiConfig";
import Admin from "./pages/Admin/Admin";
//redux
import { useDispatch } from "react-redux";
import { getUser } from "./state/actions/action";
import { useEffect } from "react";
import View from "./View/View";

const App = () => {
  const dispatch = useDispatch();
  const getCurrentUser = async () => {
    let token = localStorage.getItem("Engine_Token");
    if (token) {
      let REQ = await fetch(`${BaseUrl}/user?api_key=${token}`);
      let RES = await REQ.json();
      console.log(REQ.status, RES.user);
      if (REQ.status == 200) {
        dispatch(getUser({ auth: true, ...RES.user }));
      } else {
        dispatch(getUser({ auth: false, user: null }));
      }
    } else {
      dispatch(getUser({ auth: false, user: null }));
    }
  };
  useEffect(() => {
    getCurrentUser();
  }, []);
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
          <Route path="/admin" element={<Admin />} />
          <Route path="/view/:id/:sem" element={<View />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
