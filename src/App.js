
import './css/styles.css';
import './css/bootstrap.css';

import NavBar from "./components/NavBar";
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
/* import Login from './components/Login'; */    /* <Route path="/Login/" component={Login} />  Add back to line 26 for capstone */
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import AllData from './components/AllData';

import { UserContext } from './components/context';
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
    <NavBar/>
    <Router>  
      <UserContext.Provider value={{users:[{name:'Tony',email:'adluce3@gmail.com',password:'Olivia001',balance:100, isLogged:'true'}]}}> 
        <div>
          
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />

          <Route path="/Deposit/" component={Deposit} />
          <Route path="/Withdraw/" component={Withdraw} />
          <Route path="/AllData/" component={AllData} />
        </div>
       </UserContext.Provider>
    </Router>
   
    </>
  );
}
export default App;