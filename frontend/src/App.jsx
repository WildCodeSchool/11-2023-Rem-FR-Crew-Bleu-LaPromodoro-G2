import Focus from "./components/Focus";
import "./App.css";

function App() {
  // Oppenheimer
  // const video1 = {
  //   media_type: "movie",
  //   id: 872585,
  // };

  // Asterix & Obelix
  // const video2 = {
  //   media_type: "movie",
  //   id: 643215,
  // };

  // Friends
  // const video3 = {
  //   media_type: "tv",
  //   id: 1668,
  // };

  // Breaking bad
  // const video4 = {
  //   media_type: "tv",
  //   id: 1396,
  // };

  // The Handmaid's Tale
  const video5 = {
    media_type: "tv",
    id: 69478,
  };

  return (
    <div className="App">
      <Focus video={video5} />
    </div>
  );
}

export default App;
