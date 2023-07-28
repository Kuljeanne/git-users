import Pagination from "./components/Pagination";
import RadioBtnGroup from "./components/RadioBtnGroup";
import SearchForm from "./components/SearchBlock";

function App() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <SearchForm
        title="Поиск по пользователям GITHUB"
        inputPlaceholder="Поиск"
        onSubmit={() => console.log("smth is happening")}
      />
      <RadioBtnGroup
        name="sort"
        onChange={(e) => console.log(e.target.value)}
      />
      <Pagination />
    </div>
  );
}

export default App;
