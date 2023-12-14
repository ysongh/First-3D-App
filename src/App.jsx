import { HashRouter, Route, Routes } from 'react-router-dom';

import Example from './pages/example';
import Navbar from './components/Navbar';
import Rain from './pages/Rain';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route
          path="/example"
          element={<Example />} />
        <Route
          path="/rain"
          element={<Rain />} />
        <Route
          path="/"
          element={
            <h1>Home</h1>} />
      </Routes>
    </HashRouter>
  )
}

export default App;
