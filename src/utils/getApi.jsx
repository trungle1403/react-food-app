import axios from "axios"

const apis =  
[
'bbqs','best-foods','breads','burgers','chocolates','desserts','drinks',
'fried-chicken','ice-cream','pizzas','porks','sandwiches','sausages','steaks', 
]

const getApiUrl = (params) =>{
    const url = `https://ig-food-menus.herokuapp.com/${params}`
    axios.get(url)
    .then((res) => {
        const data = res.data
    })
    .catch(error => console.log(error))
}

const getApi = {apis,getApiUrl}

export default getApi