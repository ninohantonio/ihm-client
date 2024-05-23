import axios from 'axios'


const AlimentationService = {
    getAllAlimentation: (categoryId) => {
        try {
            return axios.get(`http://localhost:8080/alimentation/${categoryId}`)
                .then((res)=>{
                    return res.data
                }).catch(err => console.error("Error get alimentation"))
        }catch (e) {
            console.error("Error get alimentation 2")
        }
    },

    insertAlimentation: (alimentationData) => {
        try {
            return axios.post("http://localhost:8080/alimentation/create", alimentationData)
                .then((res)=>{
                    return res.data
                }).catch(err => console.error("Insert alimentation error", err))
        }catch (e) {
            console.error("Error insert alimeantation ")
        }
    },

    updateAlimentation: (alimentationData, id) => {
        try {
            return axios.put(`http://localhost:8080/alimentation/update/${id}`, alimentationData)
                .then((res)=>{
                    return res.data
                }).catch(err => console.error("update alimentation error ", err))
        }catch (e) {
            console.error("error update alimentation ", e)
        }
    },

    deleteAlimentation: (id) => {
        try {
            return axios.delete(`http://localhost:8080/alimentation/delete/${id}`)
                .then((res) => {
                    return res.data
                }).catch(err => console.error("delete error alimentation ", err))
        }catch (e) {
            console.error("delete alimentation error ", e)
        }
    },

    searchAlimentation : async (category, heure) => {
        try {
            return axios.get(`http://localhost:8080/alimentation/search/${category}?heure=${heure}`)
                .then((res)=>{return res.data})
                .catch(err => console.error("search error ", err))
        }catch (e) {
            console.error("search error ", e)
        }
    }
}

export default AlimentationService