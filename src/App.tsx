import Card from "./components/Card";
import styled from "styled-components";
import picture from './assets/picture.png';
import  './index.css'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  flex-wrap: wrap;  /* Allow cards to wrap on smaller screens */

  @media (max-width: 768px) {
    flex-direction: column;  /* Stack cards vertically on mobile */
    justify-content: center;
  }
`;

const App = () => {
  return (
    <Container>
      <Card preview={picture} color="#D6E0FF" type="MINIMALISTIC" time="1 Hour" templatecode="Template 1" link="https://frankynava.com/" />
      <Card preview={picture} color="#E7E4F9" type="INFORMATIONAL" time="1 Hour" templatecode="Template 2" link="https://tristanp0824.github.io/my-portfolio/" />
      <Card preview={picture} color="#F4F5F9" type="DETAILED" time="2 Hour" templatecode="Template 3" link="https://yellowgreen-ape-672578.hostingersite.com/" />
    </Container>
  );
}

export default App;
