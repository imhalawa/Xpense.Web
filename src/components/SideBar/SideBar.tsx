import Box from "@mui/material/Box";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import { Activity, ArrowLeftRight, ListCollapse, ListIcon, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCalendar } from "../../contexts/CalendarContext";

interface SideMenuProps {
  // TODO: need to rethink this piece of functionality as it requires the menu to be partially open
  onVisibilityChange: (visible: boolean) => void;
}

const SideBar = ({ onVisibilityChange }: SideMenuProps) => {
  const location = useLocation();
  const { selectedDate, setSelectedDate } = useCalendar();
  const setActive = (path: string) => {
    if (location.pathname === path) {
      return {
        backgroundColor: "primary.light",
        color: "white",
        ":hover": {
          backgroundColor: "primary.main",
          color: "black",
        },
      };
    }
  };
  return (
    <Box
      position={"fixed"}
      width={resizeSideBar()}
      display="flex"
      flexDirection={"column"}
      height="100%"
      sx={{ backgroundColor: "white" }}
    >
      <Box display="flex" flexDirection={"column"} height="calc(100% - 64px)" justifyContent={"space-between"}>
        <List disablePadding>
          <ListItem sx={{ margin: 0, padding: 0 }}>
            <Box display={"flex"} justifyContent={"right"} sx={{ width: "100%" }}>
              <Button onClick={() => onVisibilityChange(false)}>
                <ListCollapse />
              </Button>
            </Box>
          </ListItem>
          <ListItemButton component={Link} to="/" sx={setActive("/")}>
            <ListItemIcon>
              <Activity size={24} />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/transactions" sx={setActive("/transactions")}>
            <ListItemIcon>
              <ArrowLeftRight size={24} />
            </ListItemIcon>
            <ListItemText>Transactions</ListItemText>
          </ListItemButton>
        </List>
        <List>
          <Divider />
          <Box display="flex" flexDirection={"column"} justifyContent="center">
            <DateCalendar
              sx={{ width: "100%" }}
              value={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              disableFuture
            />
            <Box display="flex" justifyContent={"center"} mb={1}>
              <Button onClick={() => setSelectedDate(null)} fullWidth>
                Clear
              </Button>
            </Box>
          </Box>
          <Divider />
          <ListItemButton component={Link} to="/settings" sx={setActive("/settings")}>
            <ListItemIcon>
              <Settings size={24} />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

const resizeSideBar = () => {
  const matchSM = useMediaQuery("(min-width: 600px)");
  const matchMd = useMediaQuery("(min-width: 900px)");
  const matchLg = useMediaQuery("(min-width: 1200px)");
  const matchXL = useMediaQuery("(min-width: 2000px)");

  if (matchXL) {
    return "8.3%";
  } else if (matchLg) {
    return "16.6%";
  } else if (matchMd) {
    return "25%";
  } else if (matchSM) {
    return "33.3%";
  }
};

export default SideBar;
