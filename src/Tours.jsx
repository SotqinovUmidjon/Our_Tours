import React from "react";
import Tour from "./Tour";

function Tours({tours, deleteEl}) {
  return (
    <main>
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="underline"></div>
          {tours.map((tour)=>{
            return(
             <Tour key={tour.id} tour={tour} deleteEl={deleteEl}/>
            )
          })}
        </div>
      </section>
    </main>
  );
}

export default Tours;
