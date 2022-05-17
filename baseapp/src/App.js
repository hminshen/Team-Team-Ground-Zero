import Homepage from './homepage';
import Mappage from './mapPage';
import Detailspage from './detailsPage';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
            {/*Defined the routes for the 3 diff pages here*/}
            <Route path="/" element={<Homepage/>} > </Route>
            <Route path="/locations" element={<Mappage/>} > </Route>
            <Route path="/details" element={<Detailspage/>} > </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
