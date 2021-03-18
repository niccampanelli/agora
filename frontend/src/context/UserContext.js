import React, { createContext, useEffect, useReducer, useState } from 'react'
import API from '../services/api'

const ContextUser = createContext({})


export const ContextUserProvider =  props => {

   // const initialState = await API.post('pegarInfo')
   const initialState = {}

   async function pega(){
    const info = await API.post('pegarInfo')
    console.log("Context"+info)
   }
   async function obse(){
      const isActive = await API.post('observador')
      console.warn(isActive)
   }
   useEffect(()=>{
      obse()
       //pega()
   },[])

    function reducer(state, action) {
        const funcao = actions[action.type]
        return funcao ? funcao(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

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