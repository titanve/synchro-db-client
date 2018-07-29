import React from "react";
import ReactDOM from "react-dom";
import "@atlaskit/css-reset";
import styled from "styled-components";

const Br = styled.div`
    width: 100%;
`

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;

  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
`;

const ProgramacionContainer = styled.div`
margin: 8px;
border: 1px solid lightgrey;
border-radius: 2px;
padding: 8px;
`

const ProgramacionesContainer = styled.div`
display: flex;
  align-content: center;
  justify-content: center;
`

const ProgramacionesActivasContainer = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  `

const ProgramacionesInactivasContainer = styled.div`
margin: 8px;
border: 1px solid lightgrey;
border-radius: 2px;
padding: 8px;
`

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <h1>Synchro db app</h1>
          <Br/>
          <ProgramacionContainer>
              <b>Nueva/Editar Programacion</b>
          </ProgramacionContainer>
          <Br/>
          <ProgramacionesContainer>
            <ProgramacionesInactivasContainer>
                <b>Programaciones inactivas</b>
            </ProgramacionesInactivasContainer>
            <ProgramacionesActivasContainer>
                <b>Programaciones activas</b>
            </ProgramacionesActivasContainer>
          </ProgramacionesContainer>
        </Container>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
