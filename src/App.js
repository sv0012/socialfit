import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Videos from "./components/Videos/Videos";
import './App.css'



function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <Header loading={loading} setLoading={setLoading} setVideos={setVideos} />
      {
        (videos.length === 0) ? (
          <Banner />
        ) : loading ? (
          <img className="workout_loader" src="/images/workout.gif" alt="" />
        ) : (
          <Videos videos={videos} />
        )
      }
      
    </div>
  );
}

export default App;
