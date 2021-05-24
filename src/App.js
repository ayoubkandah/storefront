import './App.css';
import Categories from "./components/Categories";
import Header from "./components/Header/header";
import Footer from "./components/footer/footer";
import SimpleCart from "./components/SimpleCart";
function App() {
    document.title="AK Store"
  return (
    <div>
        <Header/>
        <SimpleCart/>
        <Categories/>
        <Footer/>
    </div>
  );
}

export default App;
