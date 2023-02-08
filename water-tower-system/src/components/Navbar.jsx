import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'




export const Navbar = () => {
  return (
            <AppBar position="static" style={{backgroundColor:"#0471a6"}}>
          <Toolbar>
            <Typography variant="h5">
              TORRE METEOROLÓGICA
            </Typography>
          </Toolbar>
        </AppBar>
  )
};

export default Navbar;