import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
//import { Customer,Customers,Carts,Dispense,Area,Products,Orders } from './components/pages/Customer';
import { Menu,Menus } from './components/pages/menu/Menu';
import Area from './components/pages/menu/Area'
import './App.css';



function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar/>
        <Switch>
        <Route path="/menu" exact component={Menu} />
        <Route path="/menu/menus" exact component={Menus} />
        <Route path="/menu/user" exact component={Area} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
