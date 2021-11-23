import "./App.css";
import {
  Header,
  LeftSideBar,
  RightSideBar,
  Main,
  Footer,
  Search,
  Content,
} from "./components";
import ErrorBoundary from "./components/ErrorBoundary";

function App({ theme }) {
  return (
    <div style={theme.app}>
      <Header theme={theme.header} />
      <ErrorBoundary>
        <LeftSideBar theme={theme.leftSideBar}>
          <h2>Stuff To Do Here</h2>
          <Search />
        </LeftSideBar>
      </ErrorBoundary>

      <Main theme={theme.main}>
        <Content />
      </Main>

      <RightSideBar theme={theme.rightSideBar} />

      <Footer theme={theme.footer} />
    </div>
  );
}

export default App;
