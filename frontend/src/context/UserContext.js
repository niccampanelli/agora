import React, { createContext, useEffect, useReducer, useState } from 'react'
import API from '../services/api'

const ContextUser = createContext({})
const initialState = API.get('pegarInfo') 

export const ContextUserProvider = props => {

  //  async function pegarDados(){
  //      const userInfo = await pegarDadosUser()
   //     const initialState = userInfo
   //     return initialState
  //  }

    function reducer(state,action){
        const funcao = actions[action.type]
        return funcao ? funcao(state,action) : state
    }

    const [state,dispatch] = useReducer(reducer,initialState)

    return (
        <ContextUser.Provider value={{ state, dispatch }}>
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