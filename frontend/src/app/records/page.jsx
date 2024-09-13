"use client";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user-context";
import axios from "axios";
import { apiUrl } from "../utils/utils";
import Sidebar from "./sidebar";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Records = () => {
  const { user } = useContext(UserContext);
  const [transactionData, setTransactionData] = useState([]);

  const fetchTransactions = async (req, res) => {
    try {
      const res = await axios.get(`${apiUrl}/records`);
      console.log("transaction:", res.data.transaction);
      setTransactionData(res.data.transaction);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchTransactions();
  }, [user]);
  return (
    <div className="flex justify-center gap-20 my-10">
      <div className="w-[280px]">
        <Sidebar />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="w-[32px] h-[32px] rounded-md bg-slate-50 border border-1 flex justify-center items-center">
              <IoIosArrowBack />
            </button>
            <p>Last 30 days</p>
            <button className="w-[32px] h-[32px] rounded-md bg-slate-50 border border-1 flex justify-center items-center">
              {" "}
              <IoIosArrowForward />
            </button>
          </div>
          <div>
            <select class="select select-bordered w-sm h-[50px] max-w-xs">
              <option disabled selected>
                Newest first
              </option>
              <option>Earlier</option>
              <option>All</option>
            </select>
          </div>
        </div>
        <div className="my-10">
          <h1>
            <strong>Today</strong>
          </h1>
          {transactionData?.map((tran) => (
            <div className="h-[80px] w-[894px] border-b-2 border-slate-100 flex justify-between items-center gap-5 ">
              <div className="flex items-center gap-2">
                <FaHome size={40} className="arrowdown " />
                <p>{tran.name}</p>
              </div>
              <p className="text-green-400">{tran.amount}₮</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Records;
