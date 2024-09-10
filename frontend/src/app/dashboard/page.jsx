"use client";
import { GoDotFill } from "react-icons/go";
import { FaArrowAltCircleUp } from "react-icons/fa";
const { useContext, useState, useEffect } = require("react");
const { UserContext } = require("../context/user-context");
const { axios } = require("axios");

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [transctionData, setTransactionData] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/${user.id}`);
      setTransactionData(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };
  useEffect(() => {
    if (user && user.id) {
      fetchTransactions();
    }
  }, [user.id]);
  return (
    <div className="bg-slate-100 pt-10">
      <div className="flex justify-evenly">
        <div className="w-[384px] h-[220px] bg-white rounded-lg py-5 pl-10 flex flex-col justify-between">
          <div className="flex gap-3">
            <img src="plus.png" alt="" />
            Geld
          </div>
          <div>
            <div>
              {" "}
              <p>Cash</p>
              <p>10,000.00</p>
            </div>
            <img src="./Union.png" alt="" />
          </div>
        </div>
        <div className="w-[384px] h-[220px] rounded-lg bg-white py-5 pl-10 flex flex-col justify-between">
          <div className="flex items-center">
            <GoDotFill />
            Your income
          </div>
          <div className="">
            <div className=" flex">
              <p className="text-[36px]">1,200,000</p>
              <img src="./utg.png" alt="" />
            </div>

            <p>Your Income Amount</p>
          </div>
          <div>
            <FaArrowAltCircleUp />
            32% from last month
          </div>
        </div>
        <div className="w-[384px] h-[220px] rounded-lg bg-white py-5 pl-10 flex flex-col justify-between">
          <div className="flex items-center">
            <GoDotFill />
            Total Expenses
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1>Income-Expense</h1>
        </div>
      </div>

      <div>
        <h1>Income-Expense</h1>
      </div>
    </div>
  );
};
export default Dashboard;
