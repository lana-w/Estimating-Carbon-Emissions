// Calling the Open Food Facts API to get product information using the name

const productName = "Nutella"

const encodedProductName = encodeURIComponent(productName)

const apiURL = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodedProductName}&search_simple=1&action=process&json=1`


// Call fetch on the API URL
// fetch returns a promise so we can do .then() and .catch() on that promise object

// promiseObject = fetch(apiURL) // fetch returns a promise object

// promiseObject
//     .then(response => {
//         if (!response.ok){
//             console.log("Response not ok:", response.status)
//         }
//         return response.json()
//     })
//     .then(data => { // Execute if promise is fulfilled
//         let products_array = data.products
//         products_array.forEach(product =>
//         {
//             console.log("Product Name: ", product.product_name)
//             console.log('Brand:', product.brands);
//             // console.log('Ingredients:', product.ingredients_text);
//             console.log('Nutrition grade:', product.nutrition_grades_tags);
//         })
//     })
//     .catch(error => {
//         console.log(error)
//     })



async function fetchData(){
    try{ // what to execute
        const response = await fetch(apiURL, 
            {"method": "GET"}
        )

        const data = await response.json()
        
        let products_array = data.products
        products_array.forEach(product =>
        {
            console.log("Product Name: ", product.product_name)
            console.log('Brand:', product.brands);
            // console.log('Ingredients:', product.ingredients_text);
            console.log('Nutrition grade:', product.nutrition_grades_tags);
        })

    }
    catch (error){ // what to do on failure
        console.log(error)
    }
}