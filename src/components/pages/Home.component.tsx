import {getUsers} from '../../services/User.service'
import {IUser} from '../../models/Usermodel'
import { useEffect, useState } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils';

let tempUsers: IUser[];
function Home(){
    const [usersArray, setUsersArray] = useState(tempUsers)
    useEffect(()=>{
        getUsers().then((users:IUser[])=>{
            setUsersArray(users)
        })
    },[])



    return(
        <div>
            <h1>Home</h1>
              <table>
                <thead>
                    {usersArray?(
                    Object.keys(usersArray[0]).map((key)=> <th>{key}</th> )
                    ): (<th></th>)}
                </thead>
                <tbody>
                    {usersArray?.map((user) => (
                    <tr>
                        {Object.values(user).map((value) => (
                            typeof(value) =="string"?
                            <td>{value}</td>:
                            <td>{value.first+""+ value.last}</td>
                   ))}
                   </tr>
                    ))}
                </tbody>
              </table>
        </div>
    );
}
export default Home;