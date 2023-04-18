import { useState } from "react"
import SignupForm from "./SignupForm"
import Login from "./Login"
import { Button } from "react-bootstrap"

export default function Home (){
  const [isMember,setIsMember] = useState(false)

  return (
  <>
   {   (isMember)
      ?  <Login />
      :  <SignupForm />
   
      }
         <Button onClick = {()=> setIsMember(!isMember)}> Switch Form</Button>
  </>
  )
}