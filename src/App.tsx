const Card = () => {
  return (
    <div className="card">
      <img src="../src/assets/react.svg" alt="profile picture" />
      <div className="cp-container">
        <h2>ayayayaya</h2>
        <h3>mahasiswiuiuiui</h3>
        <ul className="cp">
          <li>
            <p>088802556598</p>
            <h4>phone number</h4>
          </li>
        </ul>
        <div className="buttons">
          <button className="fav">favorite</button>
          <button>edit</button>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <h1>ayyub phone book</h1>
      <Card />
    </>
  );
}

export default App;
