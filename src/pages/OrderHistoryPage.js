import { checkToken }  from "../utilities/users-service"
import { useState   } from "react"

export default function OrderHistoryPage (props) {
  const [expDate,setExpDate]=useState("")
  const handleCheckToken = async () => {
    const expDate = await checkToken()
  }

  return (
    <>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
      {
            expDate?
            <p>{expDate.toLocaleString()}</p>
            :
            ""
        }
        </>
    )
}