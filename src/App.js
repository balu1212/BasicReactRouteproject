import { BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Home from './pages/Home';
function App() {
  const client=new QueryClient();
  return (
    <div className="App">
    <QueryClientProvider client={client}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Page1" element={<Page1/>}/>
      <Route path="/Page2" element={<Page2/>}/>
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    </div>
  );
}

export default App;
