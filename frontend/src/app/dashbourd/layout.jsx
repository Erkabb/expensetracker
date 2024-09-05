"use client";

const { useRouter } = require("next/router");
const { UserContext } = require("../context/user-context");
const { useContext, useEffect } = require("react");

const Layout = ({ children }) => {
  const { user, fetchUserData } = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    fetchUserData();
  }, []);
};
