import { useState } from "react"
import SignupForm from "./SignupForm"
import Signup from "./Signup"

import Login from "./Login"
import { Button } from "react-bootstrap"

export default function Home (){
  const [isMember,setIsMember] = useState(false)

  return (
  <>
   {   (isMember)
      ?  <Login />
      :  <Signup />
   
      }
         <Button onClick = {()=> setIsMember(!isMember)}> Switch Form</Button>
  </>
  )
}