import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BaseUrl } from "../../config/apiConfig";

function TruncateText({ text, limit }) {
  if (text.length <= limit) {
    return <span>{text}</span>;
  } else {
    const truncatedText = text.slice(0, limit) + "...";
    return <span title={text}>{truncatedText}</span>;
  }
}
const UserData = (props) => {
  return (
    <div className="w-full my-4 bg-white rounded-md sm:rounded-full shadow-lg flex py-3 flex-row px-3 sm:px-6 sm:gap-0 gap-4 items-center justify-between">
      <div className="left flex items-center gap-2 sm:gap-4">
        {props.profileImage ? (
          <img className="w-8 h-8 rounded-full" src={props.profileImage} />
        ) : (
          <div className="w-8 h-8 rounded-full animate-pulse bg-gray-500"></div>
        )}
        {props.userEmail ? (
          <span className="text-xs sm:text-base">
            <TruncateText text={props.userEmail} limit={18} />
          </span>
        ) : (
          <span className="w-48 h-5 bg-gray-500 animate-pulse rounded-full"></span>
        )}
      </div>
      <div className="right flex items-center gap-4">
        {props.role ? (
          <div
            onClick={() => {
              props.changeAccess(props.id);
            }}
            className={`w-10 sm:w-12 flex transition ${
              props.role == "ADMIN" ? "justify-end" : "justify-start"
            } items-center px-0.5 h-4 sm:h-6 rounded-full bg-zinc-200`}
          >
            <div className="w-4 sm:w-5 cursor-pointer h-4 sm:h-5 rounded-full bg-blue-500"></div>
          </div>
        ) : (
          <>
            <div className="w-14 h-6 bg-gray-500 animate-pulse rounded-full"></div>
          </>
        )}
      </div>
    </div>
  );
};

const Dashboard = ({ progress }) => {
  const [users, setUsers] = useState(null);
  const getUsers = async () => {
    progress(30);
    try {
      let token = localStorage.getItem("Engine_Token");
      let APIREQ = await fetch(`${BaseUrl}/users?api_key=${token}`);
      let APIRES = await APIREQ.json();
      progress(60);
      if (APIREQ.status == 200) {
        setUsers(APIRES);
      } else {
        toast.error(APIRES.message);
      }
    } catch (err) {
      toast.error("Hey Please Try Again Later");
    }
    progress(100);
  };

  const modifiAccess = async (id) => {
    progress(30);
    try {
      let token = localStorage.getItem("Engine_Token");
      if (!token) return;
      let APIREQ = await fetch(
        `${BaseUrl}/changeRole?api_key=${token}&id=${id}`,
        {
          method: "PUT",
        }
      );
      let APIRES = await APIREQ.json();
      progress(50);

      if (APIREQ.status == 200) {
        getUsers();
        toast.success(APIRES.message);
      } else {
        toast.error(APIRES.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
    progress(100);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="w-full my-12">
        <div className="container mx-auto px-4">
          <div className="flex py-2 px-4 items-center justify-between">
            <span className="text-gray-600 font-semibold">User Info</span>
            <span className="text-gray-600 font-semibold">Admin Access</span>
          </div>
          {users == null ? (
            <>
              <UserData />
              <UserData />
              <UserData />
              <UserData />
              <UserData />
              <UserData />
              <UserData />
              <UserData />
              <UserData />
              <UserData />
              <UserData />
              <UserData />
            </>
          ) : (
            users.map((user, index) => {
              return (
                <UserData
                  key={index}
                  id={user._id}
                  profileImage={user.profileImage}
                  userEmail={user.userEmail}
                  role={user.role}
                  changeAccess={modifiAccess}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
