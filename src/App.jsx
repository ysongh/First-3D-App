import { HashRouter, Route, Routes } from 'react-router-dom';

import Example from './pages/example';

function App() {
  return (
    <HashRouter>
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
