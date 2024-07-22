// import logo from './logo.svg';
// import logo2 from '../img/logo192.png';

import './App.css';
// import Header from './component/header'; // Header.js 파일 import
// import Body from './component/body'; // Body.js
// import Main from './component/main'; // Main.js
// import Footer from './component/footer'; // Footer.js

import Body from './props/body';
import Main from './props/main';
import Counter from './props/counter';
function App() {
  var weather = '비바람';
  const Bodyprops = {
    name: '홍길동',
    object: 'react',

  }
  return (
  <div className="App">
    <Body weather={weather}/>
    <Main BodyProps={Bodyprops}/>
    <hr/>
    <Counter/>


  </div>
  );
}

export default App;