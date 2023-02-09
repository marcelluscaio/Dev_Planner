import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;

// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Login from './Login'
// import SignUp from './SignUp'
// import Logged from './Logged'
// import { AuthProvider } from './Auth';
// import PrivateRoute from './PrivateRoute'

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <div>
//           <Route exact path='/login' component={Login} />
//           <Route exact path='/signup' component={SignUp} />
//           <PrivateRoute exact path='/Logged' component={Logged} />
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
