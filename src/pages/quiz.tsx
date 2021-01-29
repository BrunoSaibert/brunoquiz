import React, { useState, useEffect, SyntheticEvent } from 'react';
// import { useRouter } from 'next/router';

import HeadContent from '../components/HeadContent';
import Logo from '../components/Logo';
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import Widget from '../components/Widget';
import Topic from '../components/Topic';
import Button from '../components/Button';

import db from '../lib/db';

const LoadingWidget: React.FC = () => {
  return <Widget header="Carregando...">Aguarde um instante</Widget>;
};

interface QuestionWidgetProps {
  question: {
    title: string;
    description: string;
    image: string;
    alternatives: string[];
  };
  totalQuestions: number;
  questionIndex: number;
  handleNextQuestion: () => void;
}

const QuestionWidget: React.FC<QuestionWidgetProps> = ({
  question,
  totalQuestions,
  questionIndex,
  handleNextQuestion,
}) => {
  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    handleNextQuestion();
  };

  const questionId = `question__${questionIndex}`;

  return (
    <Widget
      header={
        <h3>
          Pergunta {questionIndex + 1} de {totalQuestions}
        </h3>
      }
      image={question.image}
    >
      <h2>{question.title}</h2>
      <p>{question.description}</p>

      <form onSubmit={handleSubmit}>
        {question.alternatives.map((alternative, index) => {
          const alternativeId = `alternative__${index}`;
          return (
            <Topic key={index} as="label" htmlFor={alternativeId}>
              <input
                // style={{ display: 'none' }}
                id={alternativeId}
                name={questionId}
                type="radio"
              />
              {alternative}
            </Topic>
          );
        })}
        <Button type="submit">Confirmar</Button>
      </form>
    </Widget>
  );
};

const screenStates = {
  LOADING: 'LOADING',
  RESULT: 'RESULT',
  QUIZ: 'QUIZ',
};

const Quiz: React.FC = () => {
  // const router = useRouter();

  // const [name, setName] = useState('');

  // useEffect(() => {
  //   setName(String(router.query.name));
  // }, [router.query.name]);

  const [screenState, setScreenState] = useState(screenStates.LOADING);

  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 300);
  }, []);

  const handleNextQuestion = (): void => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <HeadContent title={db.title} bg={db.bg} description={db.description} />

      <QuizContainer>
        <Logo />

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
            handleNextQuestion={handleNextQuestion}
          />
        )}

        {screenState === screenStates.RESULT && (
          <Widget>Você acertou X questões</Widget>
        )}
      </QuizContainer>
    </QuizBackground>
  );
};

export default Quiz;
