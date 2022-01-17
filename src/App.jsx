import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/Sidebar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <div className="app_body">
        <Header className="Navbar"/>
        <SideBar />
       </div> 
      </header>
    </div>
  );
}

export default App;
