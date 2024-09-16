"use client";

import { GoPlus } from "react-icons/go";

import Link from "next/link";
import RecordModal from "../records/recordModal";
import { useState } from "react";

const Header = ({ user, logOut }) => {
  const [addRecord, setAddRecord] = useState(false);
  const handleClose = () => {
    setAddRecord(false);
  };
  return (
    <header className="flex items-center max-w-[1200px] mx-auto justify-between py-4">
      <div className="flex gap-6 items-center">
        <img src="./Vector.png" alt="" />
        <Link href="/dashboard">
          <p>Dashboard</p>
        </Link>
        <Link href="/records">
          <p>Records</p>
        </Link>
      </div>
      <div className="flex gap-6 items-center">
        <button className="btn bg-[#0166FF] text-white btn-sm" onClick={() => setAddRecord(true)}>
          <GoPlus />
          Add records
        </button>
        <RecordModal isOpen={addRecord} closebtn={handleClose}/>
        <div className="avatar w-12 h-12">
          <div className="w-24 rounded-full">
            <img src={user?.avatarImg} />
          </div>
        </div>
        <button className="btn btn-sm" onClick={logOut}>
          Log out
        </button>
      </div>
    </header>
  );
};
export default Header;
