import "./App.css";

// A search bar to search for dog breeds
// A favorites list of pupps

function App({ theme }) {
  return (
    <div style={theme.app}>
      <header style={theme.header}>
        <h1>Lookin At Some Cute Pupps</h1>
      </header>

      <div class="left-sidebar left-content">
        <h2>Stuff To Do Here</h2>
        <input placeholder="Search for a dog breed..." />
        <button>Random Pupp!</button>
      </div>

      <main>I am body!!</main>

      <div class="right-sidebar">Favorite Pupps</div>

      <footer>
        Powered by{" "}
        <a target="_new" href="https://dog.ceo/dog-api/documentation/">
          Dog API.
        </a>
      </footer>
    </div>
  );
}

export default App;
