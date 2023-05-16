import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

function App() {
  const [tours, setTours] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const url = "https://course-api.com/react-tours-project";

  const getUrl = async (url) => {
    setIsPending(true);
    const req = await fetch(url);
    const data = await req.json();
    setTours(data);
    setIsPending(false);

  };

  const deleteEl = (id) => {
    const deleteTours = tours.filter((item) => {
      return item.id !== id;
    });
    console.log("salom");
    setTours(deleteTours);
  };

  useEffect(() => {
    getUrl(url);
  }, []);

  if (isPending) {
    return <Loading/>;
  }
  if (!tours.length) {
   return (
    <main>
    <div className="title">
      <h2>No Tours Left</h2>
      <button
        onClick={() => {
          getUrl(url);
        }}
        className="btn"
      >
        REFRESH
      </button>
    </div>
  </main>
   )
  }

  return (
    <div className="App">
      <Tours tours={tours} deleteEl={deleteEl} />
     
    </div>
  );
}

export default App;
