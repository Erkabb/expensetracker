import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  //   const optionsD = {
  //     legend: {
  //       align: "start",
  //       position: "right",

  //       labels: {
  //         display: false,
  //         position: "right",
  //       },
  //     },
  //   };
  return (
    <div className=" h-[200px] w-[200px]  flex ">
      <Doughnut
        data={{
          datasets: [
            {
              data: [8000, 5000, 10000, 15000],
              backgroundColor: [
                "rgba(231, 70, 148, 1)",
                "rgba(28, 100, 242, 1)",
                "rgba(253, 186, 140, 1)",
                "rgba(22, 189, 202, 1)",
              ],
            },
          ],
          labels: ["drinks", "dessert", "food", "sweets"],
        }}
        options={{
          plugins: {
            legend: {
              position: "right",
              boxWidth: 20,
              boxHeight: 20,
              borderRadius: 10,
            },
            colors: {
              forceOverride: true,
            },
          },
        }}
      />
    </div>
  );
};
export default DoughnutChart;
