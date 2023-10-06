import { HashRouter, Route, Routes } from 'react-router-dom';

import Example from './pages/example';
import Navbar from './components/Navbar';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route
          path="/example"
          element={<Example />} />
        <Route
          path="/"
          element={
            <h1>Home</h1>} />
      </Routes>
    </HashRouter>
  )
}

export default App;
