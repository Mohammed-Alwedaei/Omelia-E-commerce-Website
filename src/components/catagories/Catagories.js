import "./styles/catagories.css";

export default function Catagories({ collections }) {
  return (
    <section>
      <div className="catagories-container">
        {collections.map((collection) => {
          return (
            <div className="catagory" key={collection.id}>
              <img src={collection.image.src} alt={collection.image.alt} />
              <p>{collection.heading}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
