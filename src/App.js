//Components
import ChooseCity from './components/choose-city/ChooseCity';
import SearchProduct from './components/search-product/SearchProduct'; 
import NotFound from './components/not-found/NotFound'; 


//Router
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
     <Routes>
        <Route path="/" element={<ChooseCity />}/>
        <Route path="/search/:value" element={<SearchProduct />}/>
        <Route path="*" element={<NotFound />}/>
     </Routes>
  )
}

export default App;