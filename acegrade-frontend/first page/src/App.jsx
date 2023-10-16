import Navbar from "./othrcontnt/navbar";
import Content from "./othrcontnt/content";
import Footer from "./othrcontnt/footer";
// import DarkMode from "./othrfldrs/darkmode";

function App() {
  return (
  <div className="App">
    <h1>Project</h1>
    {/* <DarkMode /> */}
    {/* <label id="switch">
      <input  type="checkbox" />
      <span id="slider"></span>
    </label> */}
    <Navbar />
    <Content />
    <div className="push"></div>
    <Footer />
  </div>
  );
}

export default App;
