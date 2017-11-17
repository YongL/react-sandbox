
// import React from "react";
// import ReactDOM from "react-dom"; //rendering engine // can rendering to a DOM
//
// // import Layout from "./components/Layout"; you can create another folder just to store all of the components
// class Layout extends React.Component(){
//   render(){
//     return(
//       <h1>It is working!</h1>
//     );
//   }
// }
//
//
// const app = document.getElementById('app');
// ReactDOM.render(<Layout/>, app); //render layout in app comonent



import React from "react"; // use for create JSX
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app); // render // VDOM
