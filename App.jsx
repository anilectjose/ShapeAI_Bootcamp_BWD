import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Note from "./Note.jsx";

function App() {
  return (
    <div>
      <Header />
      <h5>My recent Activities are...</h5>
      <Note />
      <Note />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}
export default App;
