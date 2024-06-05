import axios from "axios";

const VenteService = {
    allVente: (categoryId) => {
        try{
            return axios.get(`http://localhost:8080/vente/${categoryId}`).then((response) => {
                return response.data
            }).catch((error) => {
                console.log("Error" + error)
            })
        }
        catch (e) {
            console.error(e)
        }
    },

    createVente: (venteData) => {
        try {
            return axios.post("http://localhost:8080/vente/create", venteData)
                .then((result) => {
                    return result.data
                }).catch((err) => console.log("insert vente err ", err))
        }catch (e) {
            console.log("insert vente error ", e)
        }
    }
}

export default VenteService