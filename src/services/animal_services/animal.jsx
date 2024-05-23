import axios from "axios";
import category from "./category";

axios.defaults.withCredentials = true

const AnimalService = {
    allAnimal: (categoryId) => {
        try{
            return axios.get(`http://localhost:8080/animal/category/${categoryId}`).then((response) => {
                return response.data
            }).catch((error) => {
                console.log("Error" + error)
            })
        }
        catch (e) {
            console.error(e)
        }
    },

    insertAnimal: (AnimalData) => {
        try {
            return axios.post("http://localhost:8080/animal/create", AnimalData)
                .then((result) => {
                    return result.data
                }).catch((err) => console.log("insert animal err ", err))
        }catch (e) {
            console.log("insert animal error ", e)
        }
    },

    setPhoto: (animalId, file) => {
        try {
            return axios.post(`http://localhost:8080/animal/setphoto/${animalId}`, file)
                .then((res)=>{
                    return true
                }).catch((e)=>{
                    console.log("insert photo error ", e)
            })
        }catch (e) {
            console.log("error insert photo ", e)
            return false
        }
    },

    updateAnimal: (animalId, animalData) => {
        try {
            return axios.put(`http://localhost:8080/animal/update/${animalId}`, animalData)
                .then((res) => {
                    return res.data
                }).catch((e) => {
                    console.log("update animal error ", e)
                })
        }catch (e) {
            console.log("error update error ", e)
        }
    },

    deleteAnimal: (animalId) => {
        try{
            return axios.delete(`http://localhost:8080/animal/delete/${animalId}`)
                .then((res) => {
                    return res.data
                }).catch((e) => {
                    console.log("update animal error ", e)
                })
        }catch (e) {
            console.log("delete error ", e)
        }
    },

    filterBySante: async (categoryId, sante) => {
        try {
            return axios.get(`http://localhost:8080/animal/filterbyhealth/${categoryId}?sante=${sante}`).then((response) => {
                return response.data
            }).catch((e) => {console.error("filterBySante error ", e)})
        }catch (e) {
            console.log("filterBySante error ", e)
        }
    },

    filterByVaccine: async (categoryId, vaccine) => {
        try {
            return axios.get(`http://localhost:8080/animal/filterbyvaccine/${categoryId}?vaccine=${vaccine}`).then((response) => {
                return response.data
            }).catch((e)=> console.log("filterByVaccineError ", e))
        }catch (e) {
            console.log("filterByVaccineError ", e)
        }
    },

    filterByPoids: (category) => {
        try {
            return axios.get(`http://localhost:8080/animal/filterbypoid/${category}`)
            .then((response) => {return response.data})
            .catch((e) => {console.error("filterByPoid error ", e)})
        }catch (e) {
            console.log("filterByPoid error ", e)
        }
    },

    filterByAge: (category) => {
        try {
            return axios.get(`http://localhost:8080/animal/filterbyage/${category}`)
            .then((response) => {return response.data})
            .catch((e) => {console.error("filterByAgeError ", e)})
        }catch (e) {
            console.log("filterByAgeError ", e)
        }
    },

    filterBySexe: async (category, sexe) => {
        try {
            return axios.get(`http://localhost:8080/animal/sexe/${sexe}/${category}`)
                .then((response)=>{return response.data})
                .catch(e => console.error("filter by sex error ", e))
        }catch (e) {
            console.error("filter by sex error ", e)
        }
    }

}

export default AnimalService