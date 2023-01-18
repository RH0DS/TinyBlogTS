import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {

  return (
    < >
      <main className='tinyBlogMain'>
        <Header/>
        <Home/>  
        <Footer/>
      </main>
    </>
  );
}

export default App;
