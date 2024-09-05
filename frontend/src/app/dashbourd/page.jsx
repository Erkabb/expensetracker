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
  return <div></div>;
};
export default Dashboard;
