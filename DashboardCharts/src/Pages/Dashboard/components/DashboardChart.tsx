import { Bar } from "react-chartjs-2";

const DashboardChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];

  const data: any = {
    labels,
    datasets: [
      {
        label: "DataSet 1",
        data: labels?.map(() => Math.random() * 1000),
        backgroundColor: "rgba(255,99,132, 0.5)",
      },
      {
        label: "DataSet w",
        data: labels?.map(() => Math.random() * 1000),
        backgroundColor: "rgba(53,162,235, 0.5)",
      },
    ],
  };
  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Orders Revenue",
      },
    },
  };
  return <Bar options={options} data={data} />;
};

export default DashboardChart;
