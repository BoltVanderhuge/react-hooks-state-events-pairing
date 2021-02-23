import video from "../data/video.js";
import Video from "./Video"
import Comments from "./Comments"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video video={video} />
      <Comments comments={video.comments} />
    </div>
  );
}

export default App;