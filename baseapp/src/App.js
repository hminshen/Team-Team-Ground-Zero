import Homepage from './homepage';
import Mappage from './mapPage';
import Detailspage from './detailsPage';
import Detailspage2 from './detailsPage2';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
            {/*Defined the routes for the 3 diff pages here*/}
            <Route path="/locations" element={<Mappage/>} />
            <Route path="/details" element={<Detailspage/>} />
            <Route path="/details2" element={<Detailspage2/>} />
            <Route path="/" element={<Homepage/>} /> 
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
