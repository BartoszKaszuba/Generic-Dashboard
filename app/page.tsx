import SideBar from "./components/SideBar";
import KpiBlocks from "./components/KpiBlocks";
import GlobalShareChart from "./components/GlobalShareChart";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
    <SideBar></SideBar>
    <KpiBlocks></KpiBlocks>
    <GlobalShareChart></GlobalShareChart>
    </Box>
  );
}
