import "./App.css";
import { Header, LeftSideBar, RightSideBar, Main, Footer } from "./components";

// A search bar to search for dog breeds
// A favorites list of pupps stored in local storage
// //

function App({ theme }) {
  return (
    <div style={theme.app}>
      <Header theme={theme.header} />

      <LeftSideBar theme={theme.leftSideBar} />

      <Main theme={theme.main} />

      <RightSideBar theme={theme.rightSideBar} />

      <Footer theme={theme.footer} />
    </div>
  );
}

export default App;
