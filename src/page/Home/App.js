import "./App.css";
import { Header } from "./../../component/Header/Header.jsx";
import { Boxes } from "./../../component/Boxes/Boxes";
import { Blog } from "./../../component/Blog/Blog.jsx";
import { Slides } from "./../../component/Slides/Slides.jsx";
import { About } from "./../../component/About/About";
import { Contact } from "./../../component/Contact/Contact";
import { Footer } from "./../../component/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Boxes />
      <Blog />
      <Slides />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
