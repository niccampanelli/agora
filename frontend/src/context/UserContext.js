import React, { createContext, useEffect, useReducer, useState } from 'react'
import { pegarDadosUser } from '../middleware/userController'



const ContextUser = createContext({})


export const ContextUserProvider =  props => {

   // const initialState = await API.post('pegarInfo')
   const initialState = {}
   
    function reducer(state, action) {
        const funcao = actions[action.type]
        return funcao ? funcao(state, action) : state
    }

    const [state, setUserInfo] = useState({})

    useEffect(() => {
        async function pegar(){
            const user = await pegarDadosUser()
            setUserInfo(user)
        }
        setTimeout(() => {
            pegar()
        },1000);
    },[])

    

    return (
        <ContextUser.Provider value={{ state }}>
            {props.children}
        </ContextUser.Provider>
    )
}

export default ContextUser



/**
 *     useEffect(() => {
       (async function pegarDados(){
           const isConn = await observador()
           if(isConn === 1){
               const user = await pegarDadosUser()
               setUserInfo(user)
           }
           else{
               props.navigation.navigate('Login')
           }
       })
    },window.onload)
 */