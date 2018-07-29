import React from "react"
import ReactDOM from "react-dom";
import "@atlaskit/css-reset";
import styled from "styled-components";

const Container = styled.div`
margin: 8px;
border: 1px solid lightgrey;
border-radius: 2px;
`

class App extends React.Component {
    render(){
        return (
            <Reac.Fragment>
                <Container>
                <h1>Synchro db app</h1>
                </Container>
            </Reac.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));