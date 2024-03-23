import axios from 'axios'



const CategoryService = {
    getAllCategories: async () => {
        try{
            const response = await axios.get('http://localhost:8080/category').then((response) => {
                return response.data
            }).catch((error) => {console.log("Error" + error)})
            return response
        }
        catch (e) {
            console.error(e)
        }

    },
}

export default CategoryService