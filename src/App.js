import "./App.css";
import {
  Header,
  LeftSideBar,
  RightSideBar,
  Main,
  Footer,
  Search,
} from "./components";

// A search bar to search for dog breeds
// A favorites list of pupps stored in local storage
// //

function App({ theme }) {
  return (
    <div style={theme.app}>
      <Header theme={theme.header} />

      <LeftSideBar theme={theme.leftSideBar}>
        <h2>Stuff To Do Here</h2>
        <Search />
        {/* <button>Random Pupp!</button> */}
      </LeftSideBar>

      <Main theme={theme.main}>
        {/* <Content /> */}
        <div>hihi</div>
      </Main>

      <RightSideBar theme={theme.rightSideBar} />

      <Footer theme={theme.footer} />
    </div>
  );
}

export default App;
