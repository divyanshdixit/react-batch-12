import './App.css';
import Basic from './components/Basic';
import IfElseComponent from './components/IfElseComponent';
import Forms from './components/Forms';
import Heading from './components/Heading';
// import Restraunt from './components/Restraunt';
import Parent, {uContext} from './components/Parent';
import Refs from './components/Refs';
import MyParent from './components/MyParent';
import HOC from './components/HOC';
import HoverCounter from './components/HoverCounter';
import LeaveCounter from './components/LeaveCounter';
import ClickCounter from './components/ClickCounter';

function App() {
  return (
    <div className="App">
      {/* <uContext.Provider value="niksds">
        <Basic/>
        <IfElseComponent/>
        <Forms/>
        <Heading/>
        <Parent/>
      </uContext.Provider>
      <Refs/>
      <MyParent/> */}

      <HOC> 
        hiiihih
      </HOC>
      <HoverCounter/>
      <LeaveCounter/>
      <ClickCounter/>
    </div>
  );
}

export default App;
