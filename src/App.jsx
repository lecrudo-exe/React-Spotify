import CardSideBar from "./componentc/CardSideBar"
import Container from "./componentc/Coitainer"
import Header from "./componentc/header"
import Main from "./componentc/main"
import Sidebar from "./componentc/sidebar"

function App() {

  return (
    <>
    <Header/>
       <Container>
        <Sidebar>
          <CardSideBar/>
          <CardSideBar/>
          <CardSideBar/>
          </Sidebar>
        <Main/>
        </Container>
    </>
  )
}

export default App
