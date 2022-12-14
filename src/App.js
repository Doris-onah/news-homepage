import './App.css';
import Layout from './component/Layout';
import Home from './component/Home';
import Login from './component/Login';
import New from './component/New';
import Popular from './component/Popular';
import Trending from './component/Trending';
import Categories from './component/Categories';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext';

function App() {
  return (
    <div className="App">
<AuthContextProvider>
<Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="new" element={<New/>}/>
        <Route path="popular" element={<Popular/>}/>
        <Route path="trending" element={<Trending/>}/>
        <Route path="Categories" element={<Categories/>}/>
        <Route path="login" element={<Login/>}/>
        </Route>
     </Routes>
  </AuthContextProvider>
     
    </div>
  );
}

export default App;
