import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import Header from './component/Header';
import NestedNav from './component/NestedNav';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <Login/> */}
      <Header/>
      <NestedNav/>
      
    
    </div>
  );
}

export default App;
