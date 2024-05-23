import axios from 'axios'



const CategoryService = {
    getAllCategories: () => {
        try{
            const response = axios.get('http://localhost:8080/category').then((response) => {
                return response.data
            }).catch((error) => {console.log("Error" + error)})
            return response
        }
        catch (e) {
            console.error(e)
        }

    },

    haveCategory: async () => {
        try {
            const response = await axios.get("http://localhost:8080/category/first")
                .then((res)=>{
                    return res.data
                }).catch((err) => console.log("error get isauth ", err))
            return response
        }catch (e) {
            console.log("error get auth ", e)
        }
    },

    insertCategory: (category) => {
        try {
            const response = axios.post("http://localhost:8080/category/create", category)
                .then((res)=>{
                    return res.data
                }).catch((err) => console.log("error add category ", err))
            return response
        }catch (e) {
            console.log("error insert category", e)
        }
    },

    deleteCategory: (categoryId) => {
        try {
            const response = axios.delete(`http://localhost:8080/category/delete/${categoryId}`)
                .then((res)=>{
                    return res.data
                }).catch((err) => console.log("error delete category ", err))
        }catch (e) {
            console.log("error delete category ", e)
        }
    }
}

export default CategoryService