import "./App.css";
import { Feed } from "./Feed";
import { Footer } from "./Footer";
import { Header } from "./Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Feed/>
      <Footer/>
    </div>
  );
}

export default App;
