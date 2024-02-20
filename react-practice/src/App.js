import logo from "./logo.svg";
import "./App.css";
import Reducers from "./components/Reducers";

//useReducer hook
// function App() {
//   return (
//     <div className="App">
//       <Reducers />
//     </div>
//   );
// }

// export default App;
import Parentusinglocalstate from "./components/Parentusinglocalstate";
import Parentusingcontext from "./components/Parentusingcontext";
import Useref from "./components/Useref";
import Previousstate from "./components/Previousstate";
import Signup from "./components/signupformpractice/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import Controlled from "./components/controlledanduncontrolledcomponents/Controlled";
import Example from "./components/controlledanduncontrolledcomponents/Example";
import { connect } from "react-redux";
import { IncAction } from "./components/React Redux/actions";
import { DecAction } from "./components/React Redux/actions";
// function App({local_variable,IncAction,DecAction}) {
//   return (
//     <>
//     <center>
//       <h1>{local_variable}</h1>
//     </center>
//       {/* <Parentusinglocalstate />
//       <Parentusingcontext /> */}
//       {/* <Useref /> */}
//       {/* <Previousstate/> */}
//       {/* <Signup /> */}
//       {/* <Controlled/> */}
//       {/* <Example/> */}
//     </>
//   );
// }
// const mapStateToProps=state=>({
//   local_variable:state
// })
// export default connect(mapStateToProps,{IncAction,DecAction})(App);

// reduxtodo
import Userdetailtodo from "./components/reduxtodo/Userdetailtodo";

function App() {
  return (
    <div>
      <Userdetailtodo />
    </div>
  );
}
export default App;
