import {Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import TemplateSelection from './pages/TemplateSelection.jsx';
import PortfolioPreview from './pages/PortfolioPreview.jsx';

const App = () => {  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/template-selection" element={<TemplateSelection />} />
      <Route path="/portfolio-preview" element={<PortfolioPreview />} />
    </Routes>
  );
}

export default App;