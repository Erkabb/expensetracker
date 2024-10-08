"use client";

import Header from "../components/header";

const { useRouter } = require("next/navigation");
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
      <Header />

      {children}
    </div>
  );
};
export default Layout;
