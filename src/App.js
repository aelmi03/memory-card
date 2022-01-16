import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <AppWrapper>
      <Header />
      <Main />
      <Footer />
    </AppWrapper>
  );
}
const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export default App;
