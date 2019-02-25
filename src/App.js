import React, { Component } from 'react';
import Loading from './components/loading/Loading';
import { Layout } from 'antd';
import './App.css';

const { Header, Footer, Content } = Layout;

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="App">
        {loading && <Loading />}
        <Layout>
          <Header>Header</Header>
          <Content><br /><br /><br /><br /><br /><br /><br /><br />f<br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />sd
          <br /><br /><br /><br /><br /><br /><br /><br /><br />sd<br />
          <br /><br /><br /><br /><br /><br /><br />s<br /><br /><br /><br /><br /><br /></Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
