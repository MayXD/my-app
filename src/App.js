import React from 'react';
import Background from './assets/bg.jpg'
import Wallet from './components/Wallet'
import Logo from './components/Logo'
import Claim from './components/Claim'

console.log(Background);

var sectionStyle = {
  height: "100%",
  width: "100%",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};


class App extends React.Component {
  render() {
    return (
      <div className="USM" style={sectionStyle}>
        <Wallet></Wallet>
        <Logo></Logo>
        <Claim></Claim>
      </div>
    )
  }
}

export default App;