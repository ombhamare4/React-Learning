import React, { useState, useEffect, useCallback } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import TopAiringAnime from './components/TopAiringAnime/TopAiringAnime';
import LatestAnime from './components/LatestAnime/LatestAnime';

function App() {

  const [TopAnime, setTopAnime] = useState([]);
  const [latestAnime,setLatestAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const  fetchTopAnimeHandles=useCallback(async()=> {
    setIsLoading(true);
    const response = await fetch("https://api.jikan.moe/v3/top/anime");
    const data = await response.json();
    // console.log(data);
    const transformTopAnime = data.top.map(TopAnimeData => {
      return {
        id: TopAnimeData.mal_id,
        image: TopAnimeData.image_url,
        title: TopAnimeData.title,
      }
    });
    // console.log(transformTopAnime);
    setTopAnime(transformTopAnime);
    setIsLoading(false);
  },[]);


  const fetchLatestAnimeHandles = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch("https://api.jikan.moe/v3/season/2021/fall");
    const data = await response.json();
    // console.log(data);
    const transformLatestAnime = data.anime.map(LatestAnimeData => {
      return {
        id: LatestAnimeData.mal_id,
        image: LatestAnimeData.image_url,
        title: LatestAnimeData.title,
      }
    });
    // console.log(transformTopAnime);
    setLatestAnime(transformLatestAnime);
    setIsLoading(false);
  },[]);

  useEffect(()=>{
    fetchTopAnimeHandles();
    fetchLatestAnimeHandles();
  },[fetchLatestAnimeHandles,fetchTopAnimeHandles]);

  // fetchTopAnimeHandles()

  return (
    <div>
      <Header />
      <Navbar />

      <div className="d-flex container-fluid">
        <section className="w-25 me-2">
          <div className="text-center">
            <p className="text-danger">Top Airing Anime</p>
            {!isLoading && <TopAiringAnime anime={TopAnime} />}
            {isLoading &&
              <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            }
          </div>
          <div>
            <p>Scedule Anime</p>
          </div>
        </section>
        <section className="w-75">
          <LatestAnime anime={latestAnime}/>
        </section>
      </div>
    </div>
  );
}

export default App;
