import axios from "axios";
axios.defaults.withCredentials = true

const AnimalService = {
    allAnimal: async (categoryId) => {
        try{
            const response = await axios.get(`http://localhost:8080/animal/category/${categoryId}`).then((response) => {
                return response.data
            }).catch((error) => {console.log("Error" + error)})
            return response
        }
        catch (e) {
            console.error(e)
        }
    }
}

export default AnimalService