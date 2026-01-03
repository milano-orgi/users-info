import { useState } from "react";
import "./App.css";
import Header from "./assets/components/header.jsx";
import Main from "./assets/components/main.jsx";
import Footer from "./assets/components/footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
