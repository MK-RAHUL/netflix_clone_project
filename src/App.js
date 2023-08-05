import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Nav';
import Banner from './components/banner/Banner';
import Rowpost from './components/Rowpost/Rowpost';
import {originals,action, Comedy, Romance, Horror} from './Urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost title='Netflix Originals' url={originals} />
      <Rowpost title='Action' isSmall url={action}/>
      <Rowpost title='Comedy' isSmall url={Comedy}/>
      <Rowpost title='Romance' isSmall url={Romance}/>
      <Rowpost title='Horror' isSmall url={Horror}/>


    </div>
  );
}

export default App;
