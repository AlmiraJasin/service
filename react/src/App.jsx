import "./appStyle.scss"
import { SideBar } from "./components/organisms/sideBar/SideBar";
import { BrowserRouter } from "react-router-dom";
import { Content } from "./components/atoms/content/Content";
import { AuthProvider } from "./contexts/authContext"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="app">
          <SideBar/>
          <Content/>
        </div>
      </AuthProvider>  
    </BrowserRouter>
  )
}

export default App;
