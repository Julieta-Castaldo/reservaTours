import {Route, Routes} from 'react-router-dom';
//Components
import Header from './Components/HomeComponents/Header';
import Footer from './Components/HomeComponents/Footer';
//Routes
import Home from './Routes/Home'
import Login from './Routes/Login'
import ProductDetail from './Routes/ProductDetail';
import Admin from "./Routes/Admin.jsx";
import CreateProduct from './Routes/CreateProduct';
import CategorySection from './Routes/CategorySection';
import CreateCategory from './Routes/CreateCategory';
import UserProfile from './Routes/UserProfile';
import './App.css'

function App() {

    return (
        <div className='App'>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path={`/tour/:id`} element={<ProductDetail/>}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/newTour' element={<CreateProduct/>}/>
                <Route path='/category/:id' element={<CategorySection/>}/>
                <Route path='/newCategory' element={<CreateCategory/>} />
                <Route path='/myProfile' element={<UserProfile/>} />
            </Routes>
            <Footer/>
        </div>
    )
}

export default App
