import React, { useRef, useState } from "react";
import { UserList } from "./UserList";
import { CreateUser } from "./CreateUser";


export const ArrayReder = () => {
    const [users, setUsers] = useState([
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com'
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com'
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com'
        }
      ]);
    
    const [inputs,setInputs] = useState({
      username: '',
      useremail: ''
    })

    const {username,useremail} = inputs;

    const onChange = (e) =>{
      const {name,value} = e.target; //value가 현재 input값이고 name 현재 input에 들어있는 name

      setInputs({
        ...inputs,
        [name]: value
      })
    }

    const nextId = useRef(4);
    const onCreate = () => {
      const addUserInfo = {
        id: nextId.current,
        username,
        useremail
      }
      
      setUsers([
        ...users,
        addUserInfo
      ])
      
      setInputs({
        username: '',
        useremail: ''
      })

      nextId.current += 1;
    }
    return(
      <>
        <CreateUser username={username} useremail={useremail} onChange={onChange} onCreate={onCreate}/>
        <UserList  users={users}/>
      </>
    )
}