import React from "react";
import ReactDOM from "react-dom";
import "@atlaskit/css-reset";
import {
  Container,
  Br,
  ProgramacionContainer,
  ProgramacionesActivasContainer,
  ProgramacionesInactivasContainer,
  ProgramacionesContainer,
  NotificacionesContainer,
  ControlPanelContainer
} from "./css/main.js";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <h1>Synchro db app</h1>
          <Br />
          <NotificacionesContainer>
            <b>Notificaciones</b>
          </NotificacionesContainer>
          <Br />
          <ProgramacionContainer>
            <b>Nueva/Editar Programacion</b>
          </ProgramacionContainer>
          <Br />
          <ProgramacionesContainer>
            <ProgramacionesInactivasContainer>
              <b>Programaciones inactivas</b>
            </ProgramacionesInactivasContainer>
            <ProgramacionesActivasContainer>
              <b>Programaciones activas</b>
            </ProgramacionesActivasContainer>
          </ProgramacionesContainer>
          <Br />
          <ControlPanelContainer>
            <b>Control panel</b>
          </ControlPanelContainer>
        </Container>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
