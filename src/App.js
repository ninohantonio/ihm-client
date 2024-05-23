import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Animal from "./pages/animal";
import {CategoryProvider} from "./states/category_context";
import {AuthProvider} from "./states/is_authenticate";
import {TopicsProvider} from "./states/topics_context"
import AuthService from "./services/auth_services/auth";
import Error from "./pages/Error";
import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Aliment from "./pages/aliment";
import Alimentation from "./pages/alimentation";
import MainDashboard from "./pages/dashboard";
import Vente from "./pages/vente";

function App() {
    const [isAuth, setAuth] = useState(false)
    const loadauth = async () => {
        const response = await AuthService.isauth()
        setAuth(response)
    }
    useEffect(() => {
        loadauth()
        console.log(isAuth)
    }, []);
  return (
      <TopicsProvider>
      <AuthProvider>
            <CategoryProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/login" element={<Login/>} />
                    <Route path={"/animal"} element={isAuth?<Animal/>:<Login/>}/>
                    <Route path={"/aliment"} element={isAuth?<Aliment/>:<Login/>}/>
                    <Route path={"/alimentation"} element={isAuth?<Alimentation/>:<Login/>}/>
                    <Route path={"/dashboard"} element={isAuth?<MainDashboard/>:<Login/>}/>
                    <Route path={"/vente"} element={isAuth?<Vente/>:<Login/>}/>
                    {/*<Route path={"/animal"} element={isAuth?<Animal/>:<Login/>}/>*/}
                  <Route exact path="/" element={<Home/>} />
                </Routes>
              </BrowserRouter>
            </CategoryProvider>
      </AuthProvider>
      </TopicsProvider>
  );
}

export default App;
