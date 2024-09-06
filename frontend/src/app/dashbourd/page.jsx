"use client";

const { useContext, useState, useEffect } = require("react");
const { UserContext } = require("../context/user-context");
const { axios } = require("axios");
import { GoDotFill } from "react-icons/go";
import { FaArrowAltCircleUp } from "react-icons/fa";

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
    <div>
      <div>
        <div className="w-[384px] h-[220px] bg-blue-600">
          <div>
            <img src="./Vector.png" alt="" />
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
        <div className="w-[384px] h-[220px]">
          <div>
            <GoDotFill />
            Your income
          </div>
          <div>
            <p>
              1,200,000 <img src="./utg.png" alt="" />
            </p>

            <p>Your Income Amount</p>
          </div>
          <div>
            <FaArrowAltCircleUp />
            32% from last month
          </div>
        </div>
        <div className="w-[384px] h-[220px]"></div>
      </div>
    </div>
  );
};
export default Dashboard;
