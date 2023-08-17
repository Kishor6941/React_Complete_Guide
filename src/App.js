import "./App.css";
import React from "react";
// import ComponentA from "./hooks/useContext/ComponentA";
// import CounterOneR from "./hooks/useReducer/CounterOneR";
// import DataFetching from './hooks/useEffect/DataFetching';
// import FetchSignlePost from './hooks/useEffect/FetchSignlePost';
// import HookCounterOne from './hooks/useEffect/HookCounterOne';
// import IntervalHook from './hooks/useEffect/IntervalHook';
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
// import ComponentD from './components/ContextAPI/ComponentD';
//     import HoverCounter from './components/HoverCounter';
// import User from './components/User';
// import {UserProvider} from "./components/ContextAPI/UserContext"
// import PostForm from './components/HTTP/PostForm';
// import PostList from './components/HTTP/PostList';
// import CounterHook1 from './hooks/useState/CounterHook1';
// import CounterHook2 from './hooks/useState/CounterHook2';
// import CounterHook3 from './hooks/useState/CounterHook3';
// import CounterHook4 from './hooks/useState/CounterHook4';
// import User from "./hooks/useMemo/User";
// import Todo from "./hooks/useCallback/Todo";
// import FocusInput from "./hooks/useRef/FocusInput";
// import DocTitleOne from "./hooks/Custom Hooks/DocTitleOne";
 import FetchPosts from "./hooks/Custom Hooks/FetchPosts";
import FetchImage from "./hooks/Custom Hooks/FetchImage";
// import './components/appStyles.css'
// import styles from './components/appStyles.module.css'
export const UserContext = React.createContext();
export const channelContext = React.createContext();
const App = () => {
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

      {/* Ways to add css in React component */}
      {/* <StyleSheet primary={true} /> */}
      {/* <Inline /> */}

      {/* <Form /> */}

      {/* Component life cycle */}
      {/* <LifecycleA name="kishor Fawade" /> */}

      {/* Fragment use to combine mutiple elements make as parent for them */}
      {/* <FragmentDemo /> */}

      {/* Pure Component*/}

      {/* <PureComp /> */}
      {/* <ParentPureComp /> */}

      {/* refs in React*/}

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
      {/* <CounterHook4 /> */}

      {/* Hooks in React (useEffect) */}
      {/* <HookCounterOne /> */}
      {/* <IntervalHook /> */}
      {/* <DataFetching /> */}
      {/* <FetchSignlePost /> */}

      {/* useContext Hook */}
      {/* <UserContext.Provider value="Kishor">
        <channelContext.Provider value="Kishor Channel">
          <ComponentA />
        </channelContext.Provider>
      </UserContext.Provider> */}

      {/* useReducer Hook */}
      {/* <CounterOneR /> */}

      {/* useMemo Hook */}
        {/* <User /> */}

      {/* useCallback Hook */}
        {/* <Todo /> */}

      {/* useRef Hook */}
        {/* <FocusInput /> */}

      {/* custom Hook */}
      {/* <DocTitleOne /> */}
      {/* <FetchPosts /> */}
      <FetchImage />

    </div>
  );
};
export default App;
