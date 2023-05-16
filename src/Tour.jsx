import { useState } from "react";

function Tour({tour: { id, image, info, name, price }, deleteEl}) {
  const [all, setAll] = useState(false);
  const btnClick = () => {
    all ? setAll(false) : setAll(true);
  };
  return (
    <div className="box">
      <article className="single-tour">
        <img
          src={image}
          alt="Best of Paris in 7 Days Tour"
        />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>
          {all ? info : `${info.slice(0, 200)}...`}
            <button onClick={btnClick}>
              {all ? "show less" : "read more"}
            </button>
          </p>
          <button
            onClick={() => {
              deleteEl(id);
            }}
            className="delete-btn"
          >
            no interested
          </button>
        </footer>
      </article>
    </div>
  );
}

export default Tour;
