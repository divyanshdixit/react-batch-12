import logo from './logo.svg';
import './App.css';
import Basic from './components/Basic';
import IfElseComponent from './components/IfElseComponent';
import Forms from './components/Forms';
import Heading from './components/Heading';
// import Restraunt from './components/Restraunt';
import Parent, {uContext} from './components/Parent';

function App() {
  return (
    <div className="App">
      
      <Basic/>
      <IfElseComponent/>
      <Forms/>
      <Heading/>
      {/* <Restraunt/> */}
      <uContext.Provider value="nik">
        <Parent/>
      </uContext.Provider>
    </div>
  );
}

export default App;
