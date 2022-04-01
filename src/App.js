import React from 'react';
import './App.css';
import {
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  AppBar,
  Card,
  CardActions,
  CardContent,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from 'react-router-dom';
import { NavigateBeforeRounded } from '@mui/icons-material';

export default function RouterComponent() {
  return (
    <div>
      <BrowserRouter>
      {/* <Link to="/contactus"> Contact Us </Link> &nbsp; */}
      {/* <Link to="/contactus"> Contact Us </Link> &nbsp; */}
        {/* <Link to="/"> Dashboard </Link> &nbsp;
        
        <Link to="/user/3/course/10?sort=asc&filter=true"> User </Link> &nbsp;
        <Link to="/aboutus"> About Us </Link> &nbsp; */}
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          {/* <Route path="/contactus" element={<contactuss />}> </Route> */}
           <Route path="/contactus" element={<ContactUs />}></Route>
           <Route path="/AdminPage" element={<AdminPage/>}></Route>
           <Route path="/StudentLogin" element={<StudentLogin/>}></Route>
          

          {/* <Route path="/aboutus" element={<AboutUs />}>
            <Route path="" element={<AboutUsIndex />} />
            <Route path="history" element={<History />} />
            <Route path="branches" element={<Branches />} />
          </Route>

          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route
            path="/user/:userId/course/:courseId"
            element={<User />}
          ></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '2px', margin: '1px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Guvi
            </Typography>
            <Button color="inherit" onClick={()=>navigate('/Login')}>Login</Button>
          
            
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            XYZ Organization,
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            India
          </Typography>
          <Typography variant="body2">
            Learning is the key to success
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={()=>navigate('/ContactUS') }>CONTACT US</Button>
        </CardActions>
      </Card>
      <br />
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" onClick={()=>navigate('/AdminPage')}>Admin Login</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={()=>navigate('/StudentLogin')}>Student Login</Button>
        </Grid>
      </Grid>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>React JS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Node JS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Angular JS</Typography>
        </AccordionSummary>
      </Accordion>
    </div>

    
  );
}


function Login(){
  const navigate=useNavigate()
  return(
  <>
  <div class="loginform">
    <h3 class="heading">Login Page</h3>
    <form class="loginform">
      <label for="Username">Username</label> <br/>
      <input type="text" id="Username" name="Username"></input><br/>
      <label for="password">Password</label> <br/>
      <input type="password" id="password" name="password"></input><br/>
      <Button variant="contained" >Login</Button>

    </form>
    </div>
  <button onClick={()=>navigate(-1)}>go back</button>
  </>)
  
  
}

function ContactUs(){
  const navigate=useNavigate()
  return(
  <>
  <div class="Contactus">
    <div>
      <h2>Contact US Form</h2>
    <form class="userdetails">
      <label for="Name">Name</label> &nbsp;
      <input type="text" id="Name" name="Name"></input> &nbsp; &nbsp;
      <label for="Mobile">Mobile No</label>&nbsp;
      <input type="text" id="Mobile" name="Mobile"></input><br/>
      <label for="message">Enter your Message</label><br/><br/>
      <textarea id="message" name="message" rows="4" cols="50">Please enter your comments here</textarea><br/>
      <Button variant="contained" >Submit</Button>

    </form>

    </div>
    <div class="details">  
      <p>
        <b>Our details</b>
      </p>
      <ul>
        <li>21-1133/a</li>
        <li>Salipeta</li>
        <li>Gachibowli,Hyderabad</li>
        <li>TElangana</li>
        <li>Reachus @ +91-9948700008</li>
      </ul>

    </div>
  </div>
  <button onClick={()=>navigate(-1)}>go back</button>
  </>)
}

function AdminPage(){
  const navigate=useNavigate()
  return(
    <>
    
    <div class="loginform">
    <h3 class="heading">Admin Page</h3>
    <form class="loginform">
      <label for="Username">Username</label> <br/>
      <input type="text" id="Username" name="Username"></input><br/>
      <label for="password">Password</label> <br/>
      <input type="password" id="password" name="password"></input><br/>
      <Button variant="contained" >Login</Button>

    </form>
    </div>
    <button onClick={()=>navigate(-1)}>Go Back</button>
    </>
  )
}

function StudentLogin(){
  const navigate=useNavigate()
  return(
    <>
  
    <div class="loginform">
    <h3 class="heading">Student Page</h3>
    <form class="loginform">
      <label for="Username">Username</label> <br/>
      <input type="text" id="Username" name="Username"></input><br/>
      <label for="password">Password</label> <br/>
      <input type="password" id="password" name="password"></input><br/>
      <Button variant="contained" >Login</Button>

    </form>
    </div>
    <button onClick={()=>navigate(-1)}>Go Back</button>
    </>
  )
}