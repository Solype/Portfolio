import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/page/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App