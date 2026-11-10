import React, { createContext, useEffect, useState } from 'react'
import { getloacalStorage, setlocalStorage } from '../utils/localstorage'
const Authcontext = createContext()
export { Authcontext }
const Authprovider = ({ children }) => {
const [userdata, setuserdata] = useState(null)

useEffect(() => {
    setlocalStorage()
  const {employees} =getloacalStorage()
        setuserdata(employees)},
  [])


    return (
        <div>
            <Authcontext.Provider value={userdata}>
                {children}
            </Authcontext.Provider>
        </div>
    )
}

export default Authprovider
