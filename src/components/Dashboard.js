import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Dashoard() {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    navigate('/Login');
  }



  return (
    <>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Button color="inherit" sx={{ flexGrow: 1 }} onClick={handleLogout}>Logout</Button>
          </Toolbar>
        </AppBar>
        <Sidebar /> {/*Sidebar */}
      </div>
      <div>
        <div style={{ display: 'flex' }}>
          <main style={{ flex: 1 }}>
            {/* Dashboard content */}
          </main>
        </div>
      </div>
    </>
  );
}
