import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import TopBar from "./components/TopBar";
import Title from "./components/Title";
import Movies from "./components/Movies";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <TopBar />
      <Title />
      <h4>Disney</h4>
      <Movies film="Disney" />
      <h4>DC Comics</h4>
      <Movies film="dc comics" />
      <h4>Marvel</h4>
      <Movies film="Marvel" />
      <h4>Harry Potter</h4>
      <Movies film="Harry Potter" />
      <h4>Star wars</h4>
      <Movies film="Star Wars" />
      <Footer />
    </>
  );
}

export default App;
