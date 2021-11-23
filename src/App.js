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

      <ErrorBoundary message="There was a problem loading the Pupp Search. Please refresh your page to try again.">
        <LeftSideBar theme={theme.leftSideBar}>
          <h2>Stuff To Do Here</h2>
          <Search />
        </LeftSideBar>
      </ErrorBoundary>

      <ErrorBoundary message="There was a problem loading the Pup View. Please refresh your page to try again.">
        <Main theme={theme.main}>
          <Content />
        </Main>
      </ErrorBoundary>

      <ErrorBoundary message="There was a problem loading your Favorite Pupps. Please refresh your page to try again.">
        <RightSideBar theme={theme.rightSideBar} />
      </ErrorBoundary>
      <Footer theme={theme.footer} />
    </div>
  );
}

export default App;
