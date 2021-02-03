import React, { useState, useEffect } from 'react';

// import db from '../../../db.json';
import Widget from '../../components/Widget';
import QuizLogo from '../../components/QuizLogo';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import GitHubCorner from '../../components/GitHubCorner';
import AlternativeForm from '../../components/AlternativeForm';
import Button from '../../components/Button';
import BackLinkArrow from '../../components/BackLinkArrow';

const ResultWidget = ({ results }) => (
  <Widget>
    <Widget.Header>
      Tela de Resultado:
    </Widget.Header>
    <Widget.Content>
      <p>
        Você acertou
        {' '}
        {results.filter((x) => x).length}
        {' '}
        perguntas
      </p>
      <ul>
        {results.map((result, index) => (
          <li key={`result__${result}`}>
            #
            {index + 1}
            {' '}
            Resultado:
            {result === true
              ? ' Acertou'
              : ' Errou'}
          </li>
        ))}
      </ul>
    </Widget.Content>
  </Widget>
);

const LoadingWidget = () => (
  <Widget>
    <Widget.Header>
      Carregando...
    </Widget.Header>
    <Widget.Content>
      [Desafio do Loading]
    </Widget.Content>
  </Widget>
);

const QuestionWidget = ({
  question, questionIndex, totalQuestions, onSubmit, addResult,
}) => {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />

      <Widget.Content>

        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativeForm
          onSubmit={(e) => {
            e.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}

          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
        </AlternativeForm>

        {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
        {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}
      </Widget.Content>
    </Widget>
  );
};

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

function QuizPage({ externalQuestions, externalBg }) {
    const bg = externalBg;
    const [screenState, setScreenState] = useState(screenStates.LOADING);
    const [results, setResult] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const questionIndex = currentQuestion;
    const totalQuestions = externalQuestions.length;
    const question = externalQuestions[questionIndex];

  function addResult(result) {
    setResult([
      ...results,
      result,
    ]);
  }

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nexQuestion = questionIndex + 1;
    if (nexQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo />

        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget results={results} />}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/DeivissonFelipe/aluraquiz-hxh" />
    </QuizBackground>
  );
}

export default QuizPage;
