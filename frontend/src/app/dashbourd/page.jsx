const { useContext, useState, useEffect } = require("react");
const { UserContext } = require("../context/user-context");
const { default: axios } = require("axios");

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
  return (<div>
    <div>
      <h2>Records</h2>
      {transactionData?.transactions?.map((transaction, index) => {
        return (
          <div key={index} className="flex">
            <img src="/img" alt="income" />
            <div>
              <p className="mb-1">{transaction?.name}</p>
              <p className="text-[#6B7280]">{transaction?.createdat}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>);
};
export default Dashboard;
