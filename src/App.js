import './App.css';
import Categories from "./components/Categories";
import Header from "./components/Header/header";
import Footer from "./components/footer/footer";
function App() {
    document.title="AK Store"
  return (
    <div>
        <Header/>
   <Categories/>
        <Footer/>
    </div>
  );
}

export default App;
