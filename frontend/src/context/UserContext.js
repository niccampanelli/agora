import React, { createContext, useEffect, useState } from 'react'



const ContextUser = createContext({})


export const ContextUserProvider =  props => {

   // const initialState = await API.post('pegarInfo')
   const initialState = {}
   
    function reducer(state, action) {
        const funcao = actions[action.type]
        return funcao ? funcao(state, action) : state
    }

    const [state, setUserInfo] = useState({})
    const [consultas, setConsultas] = useState()
    const [uni, setUni] = useState('')

    

    return (
        <ContextUser.Provider value={{ state,setUserInfo, consultas,setConsultas,uni,setUni }}>
            {props.children}
        </ContextUser.Provider>
    )
}

export default ContextUser

