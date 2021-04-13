import React, { createContext, useEffect, useState } from 'react'
import { getCons } from '../middleware/userController';


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

    useEffect(() => {
        getCons('COD_USER', '==', state.uid).then(setConsultas).catch(console.log)
    }, [])

    return (
        <ContextUser.Provider value={{ state,setUserInfo, consultas }}>
            {props.children}
        </ContextUser.Provider>
    )
}

export default ContextUser

