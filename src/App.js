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
import FetchApi from './components/FetchApi';
import Counter from './components/Counter';
import UseCallbackHook from './components/UseCallbackHook';

function App() {
  return (
    <div className="App">
      <Refs/>
      <Counter/>
      <UseCallbackHook/>
      {/* <uContext.Provider value="niksds">
        <Basic/>
        <IfElseComponent/>
        
        <Heading/>
      </uContext.Provider> 
        <Parent/>
      
      <MyParent/>

      <HOC> 
        hiiihih
      </HOC>
      
      
  */}
  {/* <FetchApi/> */}
  <Forms/>
  <HoverCounter/>
  <LeaveCounter/>
      <ClickCounter/>
    </div>
  );
}

export default App;
