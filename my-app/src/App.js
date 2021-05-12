import React from 'react';
import './App.css';
import FormInput from './components/form-input'
import Layout from './components/layout'

function App() {

  return (
    <div className="App App-header">
      <Layout>
        <h1>BT React Code Test - by Gaurav Saxena - 11/05/21</h1>
        <FormInput />
      </Layout>
    </div>
  );
}

export default App;
