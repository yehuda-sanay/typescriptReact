const API="https://my-json-server.typicode.com/Jeck99/fake-server/users"
export const getUsers= async():Promise<any>=>{
    try {
        return await fetch(API)
        .then((res:Response)=>res.json())
    } catch (error) {
        console.log(error)
    }
}