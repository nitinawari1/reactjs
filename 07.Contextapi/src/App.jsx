import Login from "./Components/Login"
import Profile from "./Components/Profile"
import Usercontextprovider from "./context/Usercontextprovider"


function App() {
  

  return (
    <>
    <Usercontextprovider>
      <Login /> 
      <Profile /> 
    </Usercontextprovider>
    </>
  )
}

export default App