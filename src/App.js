import logo from './logo.svg';
import './App.css';
import SuccessFrame from "./frames/success-frame";
import FailureFrame from "./frames/failure-frame";
import StartFrame from "./frames/start-frame";
import ResultsFrame from "./frames/results-frame";
import QuizFrame from "./frames/quiz-frame";
import {QuizDataContextProvider} from "./contexts/quiz-data-context";
import {UserDataProvider} from "./contexts/user-data-context";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmailFrame from "./frames/email-frame";

function App() {
  return (
    <div className="App">
        <UserDataProvider>
            <QuizDataContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route index path={"/"} element={<StartFrame/>}/>
                        <Route path={"/question"} element={<QuizFrame/>}/>
                        <Route path={"/success"} element={<SuccessFrame/>}/>
                        <Route path={"/failure"} element={<FailureFrame/>}/>
                        <Route path={"/results"} element={<ResultsFrame/>}/>
                        <Route path={"/answers"} element={<EmailFrame/>}/>
                    </Routes>
                </BrowserRouter>
            </QuizDataContextProvider>
        </UserDataProvider>



    </div>
  );
}

export default App;
