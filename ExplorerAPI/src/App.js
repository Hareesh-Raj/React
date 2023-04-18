import '../src/assets/css/App.css';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Layout from "./pages/layout.pages";
import Home from "./pages/home.pages.js";
import Details from "./pages/details.pages.js";
function App() {
  return (
   <>
    <BrowserRouter>
        <Routes>
            <Route path ='/' element={<Layout/>}>
            <Route index element={<Home />} />
            <Route exact path='/home' element={<Home />}/>
            <Route path="/details" >
            <Route path=":city" element={<Details/>}/> 
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
        </BrowserRouter>
   </>
  );
}

export default App;
