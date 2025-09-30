import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Navbar() {
    const handleButtonClick = (path: string) => {
        // Handle navigation logic here
        console.log(`Navigating to ${path}`);
    };

  return (
    <AppBar position="static" sx={{
        backgroundColor: "#71f0b0ff",
        height: "3.4rem",
        justifyContent: "center",
        borderBottom: "1px solid #d1ceceff",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
        position: "sticky",
    }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "rgba(0,0,0, 0.7)", fontWeight: "400"}}>
          CV Builder Platform
        </Typography>
        <Button color="inherit" sx={{color: "rgba(0,0,0, 0.7)"}} onClick={() => handleButtonClick('templates')}>Templates</Button>
        <Button color="inherit" sx={{color: "rgba(0,0,0, 0.7)"}} onClick={() => handleButtonClick('account')}>Account</Button>
        <Button color="inherit" sx={{color: "rgba(0,0,0, 0.7)"}} onClick={() => handleButtonClick('sign-in')}>Sign in</Button>
        <Button color="inherit" sx={{color: "rgba(0,0,0, 0.7)"}} onClick={() => handleButtonClick('sign-up')}>Sign up</Button>
        <Button color="inherit" sx={{color: "rgba(0,0,0, 0.7)"}} onClick={() => handleButtonClick('sign-out')}>Sign out</Button>
      </Toolbar>
    </AppBar>
  );
}
