import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import TopAiringAnime from'./components/TopAiringAnime/TopAiringAnime';
function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <div className="d-flex container-fluid">
      <section className="width-25">
        <div>
          <p>Top Airing Anime</p>
          <TopAiringAnime/>
        </div>
        <div>
          <p>Scedule Anime</p>
        </div>
      </section>
      <section className="width-75"> 
        <h1>Main Content</h1>
      </section>
    </div>
    </>
  );
}

export default App;
