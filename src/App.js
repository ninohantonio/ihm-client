import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Animal from "./pages/animal";
import {CategoryProvider} from "./states/category_context";
import {AuthProvider} from "./states/is_authenticate";
import AuthService from "./services/auth_services/auth";
import Error from "./pages/Error";
import {useEffect, useState} from "react";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


function App() {
    const [isAuth, setAuth] = useState(false)
    const loadauth = () => {
        const response = AuthService.isauth()
        response.then((res)=>setAuth(res))

    }
    useEffect(() => {
        loadauth()
        console.log(isAuth)
    }, []);
  return (
      <AuthProvider>
        <CategoryProvider>
          <BrowserRouter>
              <ToastContainer position={"top-center"}/>
            <Routes>
              <Route path="/login" element={<Login/>} />
                <Route path={"/animal"} element={isAuth?<Animal/>:<Login/>}/>
              <Route exact path="/" element={<Home/>} />
            </Routes>
          </BrowserRouter>
        </CategoryProvider>
      </AuthProvider>
  );
}

export default App;
