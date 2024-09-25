import Card from "./components/Card"
import styled from "styled-components";
import picture from './assets/picture.png'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
`

const App = () => {
  return(
    <Container>
      <Card preview={picture} color = "#D6E0FF" type = "MINIMALISTIC" time = '1 Hour' templatecode = 'Template 1' link = 'https://frankynava22.github.io/website-template/'/> 
      <Card preview={picture} color = '#F4F5F9'  type = "TBD" time = 'TBD' templatecode = 'Template 2' link = ''/>
      <Card preview={picture} color = '#E7E4F9' type = "INFORMATIONAL" time = '2 Hour' templatecode = 'Template 3' link = 'https://tristanp0824.github.io/my-portfolio/'/>
    </Container>
  )
}

export default App;