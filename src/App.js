import React from "react";
import { Start } from "./containers/Start";
import apiConfig from "./api";
function App() {
  const startQuiz = (selectedValues) => {
    const { category, number } = selectedValues;
    const api = `${apiConfig.baseUrl + apiConfig.amount + number}&${
      apiConfig.category + category
    }`;
    console.log(api);
  };
  return (
    <div className="App">
      <Start startQuiz={startQuiz} />
    </div>
  );
}

export default App;
