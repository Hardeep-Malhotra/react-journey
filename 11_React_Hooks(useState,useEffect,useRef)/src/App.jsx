import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './useState/Counter'
import Toggle from './useState/Toggle'
import MyContextProvider from './useContext/MyContextProvider'
import { Authentication, Login } from "./useContext/Authentication";
import UseEffectHook from './useEffect/UseEffectHook'
import UseRefHook from './useRefHook/UseRefHook'

function App() {
  
  return(
    <>
    {/* Concopet of React Hooks by using useState
    <Counter/>
    <Toggle/> */}

   {/* concept of React Hooks by using useContext
    <MyContextProvider/> */}
    {/* <Authentication>
      <Login />
    </Authentication> */}

    {/* concept of React Hooks by using useEffect */}
    {/* <UseEffectHook/> */}
    
      {/* concept of React Hooks by using useRef */}
    <UseRefHook/>
    </>

      
      
    
  )
}

export default App
