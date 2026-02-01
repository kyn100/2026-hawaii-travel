import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home, Island, Place } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="island/:islandId" element={<Island />} />
          <Route path="place/:placeId" element={<Place />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
