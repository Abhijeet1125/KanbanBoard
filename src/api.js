const data_loader = async ()=>{

    const url = "https://api.quicksell.co/v1/internal/frontend-assignment"

    try {
        const response =  await fetch ( url)
        const data = await response.json()        
        return data
    } catch (error) {
        console.log ( "error is fetching data" , error )
        throw error 
    }
}

export default data_loader 