import React, { useState, useEffect } from "react";
import { Start } from "./containers/Start";
import { Quiz } from "./containers/Quiz";
import apiConfig from "./api";
function App() {
  const [isStart, setIsStart] = useState(false);
  const [api, setApi] = useState("");
  const [questions, setQuestions] = useState([]);
  const startQuiz = (selectedValues) => {
    const { category, number } = selectedValues;
    setApi(
      `${apiConfig.baseUrl + apiConfig.amount + number}&${
        apiConfig.category + category
      }`
    );
    setIsStart(true);
  };

  useEffect(() => {
    if (isStart && api !== null) {
      console.log(api);
      fetch(api)
        .then((res) => res.json())
        .then((data) => {
          if (data.response_code === 0) {
            setQuestions(data.results);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [isStart]);

  return (
    <div className="App">
      {!isStart && <Start startQuiz={startQuiz} />}
      {isStart && <Quiz questions={questions} />}
    </div>
  );
}

export default App;
