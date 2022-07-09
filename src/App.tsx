import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import SelectAccountDropdown from "./components/SelectAccountDropdown";
import { useExtension } from "./hooks/useExtension";

import logo from "./logo.svg";

const Background = styled.div`
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  min-height: 100vh;
  color: white;
`;

const Title = styled.h1`
  font-family: aktiv-grotesk, sans-serif;
  font-size: 96px;
  font-weight: 500;
`;

const TitleArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  > h1 {
    margin: 10px 0;
  }
`;

const Section = styled(Row)`
  justify-content: center;
  align-items: center;

  padding: 10em 0 0 10em;
`;

function App() {
  const { allAccounts } = useExtension();

  console.log(allAccounts);

  return (
    <Background>
      <Container>
        <Section>
          <Col>
            <TitleArea>
              <Title>Use Your Bitcoin.</Title>
              <Title>Anywhere.</Title>
            </TitleArea>
          </Col>
          <Col>
            <SelectAccountDropdown />
          </Col>
          <Section></Section>
        </Section>
      </Container>
    </Background>
  );
}

export default App;
