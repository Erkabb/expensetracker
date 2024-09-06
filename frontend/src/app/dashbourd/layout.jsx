"use client";

import Dashboard from "./page";

const { useRouter } = require("next/router");
const { UserContext } = require("../context/user-context");
const { useContext, useEffect } = require("react");

const Layout = ({ children }) => {
  const { user, fetchUserData } = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    fetchUserData();
  }, []);
  const logOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div>
      <Header user={user} logOut={logOut} />
      {children}
      <Dashboard />
    </div>
  );
};
export default Layout;
