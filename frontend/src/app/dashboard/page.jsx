"use client";
import { GoDotFill } from "react-icons/go";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import { apiUrl } from "../utils/utils";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/user-context";
import axios from "axios";
import BarChart from "../components/dashboard/BarChart";
import DoughnutChart from "../components/dashboard/Doughnut";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [transctionData, setTransactionData] = useState([]);
  const [cardInfo, setCardInfo] = useState(null);

  const fetchTransactions = async (req, res) => {
    try {
      const res = await axios.get(`${apiUrl}/records`);
      console.log("dd:", res.data.transaction);
      setTransactionData(res.data.transaction);
    } catch (error) {
      console.error(error);
    }
  };
  const getInfoCardData = async (req, res) => {
    try {
      const res = await axios.get(`${apiUrl}/records/info`);
      console.log("ST:", res.data);
      setCardInfo(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchTransactions();
    getInfoCardData();
  }, [user]);
  return (
    <div className="bg-slate-100 pt-10">
      <div className="flex justify-evenly">
        <div className="w-[384px] h-[220px] semantic rounded-lg py-5 pl-10 flex flex-col justify-between">
          <div className="flex gap-3 items-center">
            <img src="plus.png" alt="" className="w-[24px] h-[24px]" />
            <p className="text-[24px] text-white">Geld</p>
          </div>
          <div className="flex w-full justify-between pr-10 items-center">
            <div>
              {" "}
              <p className="text-slate-300 text-[16px] ">Cash</p>
              <p className="text-[24px] text-white">10,000.00₮</p>
            </div>
            <img src="Union.png" alt="" className="w-[15px] h-[20px]" />
          </div>
        </div>

        <div className="w-[384px] h-[220px] rounded-lg bg-white pb-5 px-10 flex flex-col justify-between">
          <div className="flex items-center border-b-2 border-slate-100 h-[56px]">
            <GoDotFill className="godott" />
            <strong>Your income</strong>
          </div>
          <div className="">
            <div className=" flex flex-col justify-center">
              <p className="text-[36px]">{cardInfo?.income?.sum}₮</p>
              <p className="text-slate-400">Your Income Amount</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaArrowAltCircleUp className="arrowup" />
            32% from last month
          </div>
        </div>
        <div className="w-[384px] h-[220px] rounded-lg bg-white pb-5 pl-10 flex flex-col justify-between">
          <div className="flex items-center border-b-2 border-slate-100 h-[56px]">
            <GoDotFill className="bluedott" />
            <strong>Total Expenses</strong>
          </div>
          <div className=" flex flex-col justify-center">
            <p className="text-[36px]">-{cardInfo?.expense?.sum}₮</p>
            <p className="text-slate-400">Your expense amount</p>
          </div>
          <div className="flex items-center gap-2">
            <FaArrowAltCircleDown className="arrowdown" />
            32% from last month
          </div>
        </div>
      </div>

      <div className="flex justify-evenly my-10 ">
        <div className="w-[560px] h-[250px] bg-white rounded-lg flex flex-col justify-between px-5">
          <div className="border-b-2 border-slate-100 h-[56px] flex items-center">
            <h1>
              <strong>Income-Expense</strong>
            </h1>
          </div>
          <BarChart />
        </div>
        <div className="w-[560px] h-[250px] bg-white rounded-lg flex flex-col gap-5 px-5">
          <div className="border-b-2 border-slate-100 h-[56px] flex items-center">
            <h1>
              <strong>Income-Expense</strong>
            </h1>
          </div>
          <DoughnutChart />
        </div>
      </div>

      {/* <div>
        <h1>Income-Expense</h1>
      </div> */}
      {transctionData?.map((tr) => (
        <div>{tr.name}</div>
      ))}
    </div>
  );
};
export default Dashboard;
