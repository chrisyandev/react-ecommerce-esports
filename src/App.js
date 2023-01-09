import "./categories.styles.scss";

function App() {
  const categories = [
    {
      id: 1,
      title: "Gaming Mice",
    },
    {
      id: 2,
      title: "Mouse Pads",
    },
    {
      id: 3,
      title: "Mouse Skates",
    },
    {
      id: 4,
      title: "Gaming Chairs",
    },
    {
      id: 5,
      title: "Gaming Headsets",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
        <div className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
