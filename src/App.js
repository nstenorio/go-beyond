import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main"
import style from "./App.css"

function App() {
  return (
    <div class="container">
    <div class="header"><Header /></div>
    <div class="main"><Main /></div>
    <div class="footer"><Footer /></div>
    </div>
  );
}

export default App;
