//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <TextForm upbtn="Change to UpperCase " lowbtn="Change to LowerCase"/>
    </>
  );
}

export default App;
