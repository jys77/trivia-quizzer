import React, { useState, useEffect } from "react";
import { Start } from "./containers/Start";
import { Quiz } from "./containers/Quiz";
import { Result } from "./containers/Result";
import apiConfig from "./api";
function App() {
  const [isStart, setIsStart] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [api, setApi] = useState("");
  const [questions, setQuestions] = useState([]);
  const [totalNum, setTotalNum] = useState(0);
  const [correctNum, setCorrectNum] = useState(0);
  const [isRetake, setIsRetake] = useState(false);
  const startQuiz = (selectedValues) => {
    const { category, number } = selectedValues;
    setApi(
      `${apiConfig.baseUrl + apiConfig.amount + number}&${
        apiConfig.category + category
      }`
    );
    setIsStart(true);
    setIsFinished(false);
  };

  const finishQuiz = (data) => {
    setIsStart(false);
    setIsFinished(true);
    const { number, correctNum } = data;
    setTotalNum(number);
    setCorrectNum(correctNum);
  };

  useEffect(() => {
    if (isStart && !isFinished && !isRetake && api !== null) {
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
  }, [isStart, isFinished, isRetake, api]);

  const retakeQuiz = () => {
    setIsFinished(false);
    setIsStart(true);
    setIsRetake(true);
  };

  const backHome = () => {
    setIsStart(false);
    setIsFinished(false);
    setIsRetake(false);
  };

  return (
    <div className="App">
      {!isStart && !isFinished && <Start startQuiz={startQuiz} />}
      {isStart && !isFinished && (
        <Quiz questions={questions} finishQuiz={finishQuiz} />
      )}
      {!isStart && isFinished && (
        <Result
          totalNum={totalNum}
          correctNum={correctNum}
          retakeQuiz={retakeQuiz}
          backHome={backHome}
        />
      )}
    </div>
  );
}

export default App;
