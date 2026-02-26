import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Works } from './pages/Works';
import { ProjectDetails } from './pages/ProjectDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="works" element={<Works />} />
        <Route path="works/:id" element={<ProjectDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
