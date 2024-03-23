import axios from "axios";

axios.defaults.withCredentials = true

const AuthService = {
    login: async (userData) => {
        try{
            const response = await axios.post('http://localhost:8080/signin', userData)
                .then((result)=>{
                    return result.data
                }).catch((err) =>{
                    return false
                })
            return response
        }
        catch(err) {
            console.error("Error login", err)
            throw err
        }
    },

    register: async (UserData) => {
        try{
            const response = await axios.post("http://localhost:8080/register", UserData)
                .then((res)=>{
                    return res.data
                }).catch((err)=>console.log("error register ", err));
            return response.data
        }
        catch(e){
            console.log("register error ", e)
        }
    },

    userprofile: async () => {
        try {
            const response = await axios.get("http://localhost:8080/userprofile")
                .then((res)=>{
                    return res.data
                }).catch((err)=>console.log("userprofile error ", err))

        }catch (e){
            console.log("error userprofile ", e)
        }
    },

    isauth: async () => {
        try {
            const response = await axios.get("http://localhost:8080/isauth")
                .then((res)=>{
                    return res.data
                }).catch((err) => console.log("error get isauth ", err))
            return !!response
        }catch (e) {
            console.log("error get auth ", e)
        }
    },

    logout: async () => {
        try {
            const response = await axios.post("http://localhost:8080/logout")
                .then((res)=>{
                    console.log("logout success")
                }).catch((err)=>console.log("err " + err))
        }catch (e) {
            console.log("error loout "+ e)
        }
    }
}

export default AuthService;