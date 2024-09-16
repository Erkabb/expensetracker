"use client";

import { useContext, useEffect } from "react";

import { UserContext } from "../context/user-context";
import { useRouter } from "next/navigation";
import Header from "../components/header";

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
