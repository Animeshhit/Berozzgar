import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./Layout";
import { Route, Routes, useSearchParams } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Welcome from "./pages/Welcome/Welcome";
import Year from "./pages/year/Year";
import { BaseUrl } from "./config/apiConfig";
import Admin from "./pages/Admin/Admin";
import { Navigate } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./state/actions/action";
import { useEffect } from "react";
import View from "./View/View";
// react top loading bar
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

//react toastify imple
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [progress, setProgress] = useState(0);
  const isAuth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const getCurrentUser = async () => {
    let token = localStorage.getItem("Engine_Token");
    if (token) {
      let REQ = await fetch(`${BaseUrl}/user?api_key=${token}`);
      let RES = await REQ.json();
      if (REQ.status == 200) {
        console.log(RES.user);
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
      <LoadingBar
        color="#279EFF"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={3}
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Welcome progress={setProgress} />} />
          <Route path="/home" element={<Home Lprogress={setProgress} />} />
          <Route
            path="/auth/login"
            element={<Login progress={setProgress} />}
          />
          <Route
            path="/auth/register"
            element={<Register progress={setProgress} />}
          />
          <Route path="/year/:id" element={<Year progress={setProgress} />} />
          <Route
            path="/admin"
            element={
              isAuth.auth == null ? (
                <>
                  <div className="container mx-auto px-4 py-6">
                    <h2 className="text-center my-12 capitalize text-zinc-800 text-xl">
                      Loading Admin Info Please Wait...
                    </h2>
                  </div>
                </>
              ) : isAuth.auth ? (
                isAuth.userEmail == "animeshkum723126@gmail.com" ||
                isAuth.userEmail == "souravhit2226@gmail.com" ? (
                  <Admin progress={setProgress} />
                ) : (
                  <Navigate to="/home" />
                )
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route
            path="/view/:id/:sem"
            element={<View Lprogress={setProgress} />}
          />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
