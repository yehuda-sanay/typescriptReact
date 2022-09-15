import {getUsers} from '../../services/User.service'
import {IUser} from '../../models/Usermodel'
function Home(){

const getUsersArray=async()=>{

    const userArray=await getUsers().then((result:IUser[])=>result)
    userArray.map(user=>user.age)
    
}
getUsersArray()
    return(
        <div>
            <h1>Home</h1>
              
        </div>
    )
}
export default Home;