import React, { useState, useEffect, SyntheticEvent } from 'react';
import { useRouter } from 'next/router';

import HeadContent from '../components/HeadContent';
import Logo from '../components/Logo';
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import Widget from '../components/Widget';
import Topic from '../components/Topic';
import Button from '../components/Button';
import AlternativesForm from '../components/AlternativesForm';

import { DB } from '../lib/db';

interface ResultProps {
  results: boolean[];
  totalQuestions: number;
  name?: string;
}

const ResultWidget: React.FC<ResultProps> = ({
  results,
  totalQuestions,
  name,
}) => {
  const totalHits = results.reduce((sum, result) => {
    const isCorrect = result === true;

    if (isCorrect) {
      return sum + 1;
    }

    return sum;
  }, 0);

  return (
    <Widget header={`${name} seu resultado foi`}>
      <p>
        Você acertou <strong>{totalHits}</strong> de{' '}
        <strong>{totalQuestions}</strong>
      </p>

      <ul>
        {results.map((result, index) => (
          <li key={index}>
            #{`00${index + 1}`.slice(-2)} resultado:{' '}
            <strong>{result ? 'ACERTOU' : 'ERROU'}</strong>
          </li>
        ))}
      </ul>
    </Widget>
  );
};

const LoadingWidget: React.FC = () => {
  return <Widget header="Carregando...">Aguarde um instante</Widget>;
};

interface QuestionWidgetProps {
  question: {
    title: string;
    description: string;
    image: string;
    answer: number;
    alternatives: string[];
  };
  totalQuestions: number;
  questionIndex: number;
  handleNextQuestion: () => void;
  handleAddResult: (boolean) => void;
}

const QuestionWidget: React.FC<QuestionWidgetProps> = ({
  question,
  totalQuestions,
  questionIndex,
  handleNextQuestion,
  handleAddResult,
}) => {
  const [selectedAlternative, setSelectedAlternative] = useState<
    undefined | number
  >(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);

  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();

    setIsQuestionSubmited(true);

    setTimeout(() => {
      setIsQuestionSubmited(false);
      handleAddResult(isCorrect);
      setSelectedAlternative(undefined);
      handleNextQuestion();
    }, 1000);
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

      <AlternativesForm onSubmit={handleSubmit}>
        {question.alternatives.map((alternative, index) => {
          const alternativeId = `alternative__${index}`;
          const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
          const isSelected = selectedAlternative === index;

          return (
            <Topic
              key={index}
              as="label"
              htmlFor={alternativeId}
              data-selected={isSelected}
              data-status={isQuestionSubmited && alternativeStatus}
            >
              <input
                style={{ display: 'none' }}
                id={alternativeId}
                name={questionId}
                onChange={() => setSelectedAlternative(index)}
                type="radio"
                checked={isSelected}
              />
              {alternative}
            </Topic>
          );
        })}

        <Button type="submit" disabled={!hasAlternativeSelected}>
          Confirmar
        </Button>

        {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
        {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}
      </AlternativesForm>
    </Widget>
  );
};

interface QuizProps {
  db: DB;
}

const screenStates = {
  LOADING: 'LOADING',
  QUIZ: 'QUIZ',
  RESULT: 'RESULT',
};

const Quiz: React.FC<QuizProps> = ({ db }) => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const totalQuestions = db.questions.length;
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 300);
  }, []);

  useEffect(() => {
    setName(String(router.query.name));
  }, [router.query.name]);

  const handleAddResult = (result: boolean): void => {
    setResults([...results, result]);
  };

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
            handleAddResult={handleAddResult}
          />
        )}

        {screenState === screenStates.RESULT && (
          <ResultWidget
            results={results}
            totalQuestions={totalQuestions}
            name={name}
          />
        )}
      </QuizContainer>
    </QuizBackground>
  );
};

export default Quiz;
