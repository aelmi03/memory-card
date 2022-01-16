import styled from "styled-components";
import Header from "./components/Header";

function App() {
  return (
    <AppWrapper>
      <Header />
    </AppWrapper>
  );
}
const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export default App;
