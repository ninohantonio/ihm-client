import axios from "axios";


const ProduitService = {
    getAllProduct: () => {
        try {
            return axios.get("http://localhost:8080/aliment")
                .then((res) => {
                    return res.data
                }).catch((err) => {
                    console.error("get all product error ", err)
                })
        }catch (e) {
            console.error("get product error ", e)
        }
    },

    insertProduct: (alimentData) => {
        try {
            return axios.post("http://localhost:8080/aliment/create", alimentData)
                .then((res) => {
                    return res.data
                }).catch((err) => {
                    console.error("insert new aliment error ", err)
                })
        }catch (e) {
            console.error("create new aliment error", e)
        }
    },

    selectByKeyWord: async (keyword) => {
        try {
            return await axios.get(`http://localhost:8080/aliment/bykeyword?keyword=${keyword}`)
                .then((res)=>{
                    return res.data
                }).catch((err)=>{
                    console.error("get by key word error ", err)
                })
        }catch (e){
            console.error("get by key word error ", e)
        }
    },

    updateProduct: (alimentData, id) => {
        try {
            return axios.put(`http://localhost:8080/aliment/update/${id}`, alimentData)
                .then((res)=>{
                    return res.data
                }).catch(err => console.error("update aliment error ", err))
        }catch (e)  {
            console.error("update aliment error ", e)
        }
    },

    deleteProduct: (id) => {
        try {
            return axios.delete(`http://localhost:8080/aliment/delete/${id}`)
                .then((res) => {
                    return res.data
                }).catch(err => console.error("error delete aliment ", err))
        }catch (e) {
            console.error("delete error aliment ", e)
        }
    },

    substractStock: (quantite, id) => {
        try {
            return axios.put(`http://localhost:8080/aliment/substract/${id}`, quantite)
                .then((res)=>{
                    console.log("response substract ", res.data)
                    return res.data
                }).catch(err => console.error("error to substract ", err))
        }catch (e){
            console.error("substract error ", e)
        }
    },

    searchProduct: (prompt) => {
        try {
            const response = axios.get(`http://localhost:8080/aliment/search?search=${prompt}`)
                .then((res)=>{
                    console.log("resultat ", res.data)
                    return res.data
                }).catch(err => console.error("Erreur de recherche ", err))
            return response
        }catch (e) {
            console.error("search error ",e)
        }
    }
}

export default ProduitService