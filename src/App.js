import './App.css';
// import FRParentInput from './components/FRParentInput';
//import Greet from "./components/Greet"
// import Welcome from "./components/Welcome"
// import Hello from "./components/Hello"
//  import Message from "./components/Message"
//  import Counter from "./components/Counter"
//  import FunctionClick from "./components/FunctionClick"
//  import ClassClick from "./components/ClassClick"
//  import EventBind from "./components/EventBind"
//  import ParentComponent from "./components/ParentComponent"
//  import UserGreeting from "./components/UserGreeting"
//  import PersonList from "./components/PersonList"
//  import StyleSheet from "./components/StyleSheet"
// import Inline from "./components/Inline"
//  import Form from "./components/Form"
//  import LifecycleA from "./components/LifecycleA"
// import FragmentDemo from "./components/FragmentDemo"
// import PureComp from "./components/PureComp"
//  import ParentPureComp from "./components/ParentPureComp"
//  import RefDemo from "./components/RefDemo"
//  import FocusInputRef from "./components/FocusInputRef"
//     import ClickCounter from './components/ClickCounter';
import ComponentD from './components/ContextAPI/ComponentD';
//     import HoverCounter from './components/HoverCounter';
// import User from './components/User';
import {UserProvider} from "./components/ContextAPI/UserContext"
import PostForm from './components/HTTP/PostForm';
import PostList from './components/HTTP/PostList';
import CounterHook1 from './hooks/CounterHook1';
import CounterHook2 from './hooks/CounterHook2';
import CounterHook3 from './hooks/CounterHook3';
import CounterHook4 from './hooks/CounterHook4';
  // import './components/appStyles.css'
  // import styles from './components/appStyles.module.css'
const  App = () => {
  return (
    <div className="App">
      {/* <h1 className='error'>error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Greet />
      <Welcome /> */}
      {/* <Hello  name="Kishor" surName="Fawade"> <span>Latur</span> </Hello>
      <Hello name="Sunil" surName="Fawade"> <button>Action</button> </Hello>
      <Hello name="Piyush"  surName="Fawade" />

      <Welcome name="Harsh"> <span>Test</span> </Welcome> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <PersonList /> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <Inline /> */}
      {/* <Form /> */}
      {/* <LifecycleA name="kishor Fawade" /> */}
      {/* <FragmentDemo /> */}
      {/* <PureComp /> */}
      {/* <ParentPureComp /> */}
      {/* <RefDemo /> */}
      {/* <FocusInputRef /> */}
      {/* <FRParentInput /> */}
      {/* <ClickCounter name="Kishor" />
      <HoverCounter name="Kishor" /> */}
      {/* <User render = {(isLoggedIn) => isLoggedIn ? "Kishor" : "Guest" }  /> */}

      {/* Context API */}

      {/* <UserProvider value="Kishor">
      <ComponentD />
      </UserProvider> */}

{/* Http using Axios */}

      {/* <PostList /> */}
      {/* <PostForm /> */}


 {/* Hooks in React (useState) */}
      {/* <CounterHook1 /> */}
      {/* <CounterHook2 /> */}
      {/* <CounterHook3 /> */}
      <CounterHook4 />
    </div>
  );
}
export default App;
