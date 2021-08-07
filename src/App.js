import { Component } from "react";
import Layout from "./Hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";

class App extends Component {
  render() {
    return (
      <Layout>
        <Quiz/>
      </Layout>
    );
  }
}

export default App;
