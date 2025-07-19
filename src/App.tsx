import HomePage from './pages/HomePage.tsx';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RenderedResume from './pages/RenderedResume.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/resume'} element={<RenderedResume />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
