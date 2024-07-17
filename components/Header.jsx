import { useContext } from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import PostContext from "../src/context/PostContext"

const Header = () => {
  const navigate = useNavigate()
  const { setCurrentPost} = useContext(PostContext)
  return (
    <header className='bg-dark text-white p-2 fixed-top d-flex justify-content-between align-items-center'>
      <h1>Tech. News</h1>
      {
        window.location.pathname !== "/" ?
        <Button variant="secondary" onClick={() =>{
            navigate(-1)
            setCurrentPost(null)
          }}>Back</Button>
          :
          null
      }
    </header>
  )
}

export default Header