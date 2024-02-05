import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { toast } from "react-toastify";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'


const pages = ['Register', 'Login'];
const settings = ['Profile', 'Cart',];

function ResponsiveAppBar() {
  const[a,setA]=React.useState(false)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  React.useEffect(()=>{
    setA(localStorage.token ? true:false)
  },[])
  const a5=()=>{
    localStorage.clear();
    window.location.reload();
    toast("logged out sucess")
    
    }
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'rgba(128, 128, 128, 0.6)', borderRadius: '15px',marginRight:{md:'60px',xs:'39px'},marginTop:'10px', width: '90%', }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to="/" style={{textDecoration:'none',color:"#3993ee"}}>
              GYMPRO
              </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    
                  <Link to={`/${page}`} style={{ textDecoration: 'none', color: '#28282a' }}>
                    {page}
                  </Link>
                  </Typography>
                </MenuItem>

              ))}
              {a && <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                  <Link to="/log" style={{ textDecoration: 'none', color:"#3993ee" }}>
                    login
                  </Link>
                  </Typography>
                </MenuItem>}
              
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to="/" style={{textDecoration:'none',color:"#3993ee"}}>
              GYMPRO
              </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' ,}}>
            {pages.map((page) => (
              <Button
              variant='cointained'
              color="secondary"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               <Link to={`/${page}`} style={{ textDecoration: 'none',  fontWeight: '700',color:"#3993ee" }}>
                    {page}
                  </Link>
              </Button>
            ))}
             
          
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
               {a? <Avatar alt="Remy Sharp" src="https://www.motortrend.com/uploads/f/157002894.jpg" /> 
               :
                
                <></>} 
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Link to={`/${setting}`} style={{ textDecoration: 'none',  fontWeight: '700', color: 'inherit' }}>
                    {setting}
                  </Link>
            
                </MenuItem>
              ))}
              {a?<><MenuItem  onClick={a5}>
                    <Typography style={{ textDecoration: 'none',  fontWeight: '700', color: 'inherit' }}>
                    LOGOUT
                  </Typography>
            
                </MenuItem> </>:<></>}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
