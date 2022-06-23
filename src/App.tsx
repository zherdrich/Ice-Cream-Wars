
import './App.css';
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';
import Votes from './components/Votes';
import Footer from './components/Footer';


function App() {
  return (
      <div className="AppData">
        <div className='cloud'>
           <Header />
        <main className='content'>
          < AdDesigner />
          <Votes />

        
        </main>
        <Footer/>
        </div>
      </div>
  );
}

export default App;
