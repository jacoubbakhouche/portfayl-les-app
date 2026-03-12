import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Works } from './pages/Works';
import { ProjectDetails } from './pages/ProjectDetails';
import { NabdaScreen } from './pages/NabdaScreen';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="works" element={<Works />} />
        <Route path="works/:id" element={<ProjectDetails />} />
        <Route path="nabda-demo" element={<NabdaScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
