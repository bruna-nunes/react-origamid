const App = () => {
  function handleClick(event) {
    console.log(event)
  }

  return <>
    <button onClick={handleClick}>Clique</button>
    <button onClick={(event) => console.log(event)}>Clique func. anonima</button>
  </>;
};


export default App