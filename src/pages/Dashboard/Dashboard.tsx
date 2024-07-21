import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import XpensePieChart from "../../components/Charts/XpensePie/XpensePieChart.tsx";
import Box from "@mui/material/Box";
import XpenseAreaChart, { XpenseAreaChartEntry } from "../../components/Charts/XpenseLineCharts/XpenseLineCharts.tsx";
import TransactionsGrid from "../Transactions/TransactionsGrid/TransactionsGrid.tsx";
import Page from "../../components/Page/Page.tsx";

const pieData = [
  { id: 0, value: 10, label: "Category A" },
  { id: 1, value: 15, label: "Category B" },
  { id: 2, value: 20, label: "Category C" },
  { id: 3, value: 20, label: "Category D" },
  { id: 4, value: 20, label: "Category F" },
  { id: 5, value: 20, label: "Category E" },
];

const areaChartData: XpenseAreaChartEntry[] = [
  {
    date: new Date("2024-07-1"),
    value: 1150,
  },
  {
    date: new Date("2024-07-2"),
    value: 20,
  },
  {
    date: new Date("2024-07-3"),
    value: 300,
  },
  {
    date: new Date("2024-07-4"),
    value: 1750,
  },
  {
    date: new Date("2024-07-5"),
    value: 300,
  },
  {
    date: new Date("2024-07-6"),
    value: 552,
  },
];

const Dashboard = () => {
  return (
    <Page title="Dashboard" headerColor="primary.dark" headerBackgroundColor="white">
      <Grid item lg={3} md={12} xs={12}>
        <Box display="flex" alignItems="center">
          <XpensePieChart data={pieData} value={"500$"} />
        </Box>
      </Grid>
      <Grid item lg={9} md={12} xs={12} my={2}>
        <TransactionsGrid size={6} dense hidePagination />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Typography variant="h4" my={1}>
          {" "}
          Weekly Transactions
        </Typography>
        <XpenseAreaChart data={areaChartData} height={400} width={400} hideLegend={true} />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Typography variant="h4" my={1}>
          {" "}
          Monthly Overview
        </Typography>
        <XpenseAreaChart data={areaChartData} height={400} width={400} hideLegend={true} />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Typography variant="h4" my={1}>
          {" "}
          Yearly Overview
        </Typography>
        <XpenseAreaChart data={areaChartData} height={400} width={400} hideLegend={true} />
      </Grid>
    </Page>
  );
};

export default Dashboard;
