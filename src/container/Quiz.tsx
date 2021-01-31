import React, { useState, useEffect, SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import HeadContent from '../components/HeadContent';
import Logo from '../components/Logo';
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import Widget, { containerVariants } from '../components/Widget';
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

  const hitsPercent = Math.round((totalHits * 100) / totalQuestions);

  let hitsGif, hitsText;

  switch (true) {
    case hitsPercent >= 75:
      hitsGif = 'gbErpwcLlizvi';
      hitsText = 'Parabéns! Você é um grande conhecedor do assunto';
      break;
    case hitsPercent >= 50:
      hitsGif = 'pI2paNxecnUNW';
      hitsText =
        'Você conhece bem o assunto, que tal se aprofundar um pouco mais?';
      break;
    case hitsPercent >= 25:
      hitsGif = 'RyLtUMBdogHvO';
      hitsText = 'Você ainda não domina o assunto, mas está no caminho certo';
      break;
    default:
      hitsGif = 'OUwzqE4ZOk5Bm';
      hitsText = 'Você ainda tem muito o que aprender sobre o assunto';
  }

  return (
    <Widget
      as={motion.section}
      variants={containerVariants}
      header={`${name} seu resultado foi`}
      image={`https://media.giphy.com/media/${hitsGif}/giphy.gif`}
    >
      <h1>
        <strong>{hitsText}</strong>
      </h1>

      <p>
        Você acertou <strong>{totalHits}</strong> de{' '}
        <strong>{totalQuestions}</strong>
      </p>

      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <p>
              # <strong>{`00${index + 1}`.slice(-2)}</strong> resultado:{' '}
              <strong>{result ? 'ACERTOU' : 'ERROU :('}</strong>
            </p>
          </li>
        ))}
      </ul>
    </Widget>
  );
};

const LoadingWidget: React.FC = () => {
  return (
    <Widget
      header="Vamos começar..."
      image="https://media.giphy.com/media/VseXvvxwowwCc/giphy.gif"
    ></Widget>
  );
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
    }, 2000);
  };

  const questionId = `question__${questionIndex}`;

  return (
    <Widget
      as={motion.section}
      variants={containerVariants}
      href="/"
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
              as={motion.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              htmlFor={alternativeId}
              data-selected={isSelected}
              data-status={isQuestionSubmited && alternativeStatus}
              data-disabled={isQuestionSubmited}
            >
              <input
                style={{ display: 'none' }}
                id={alternativeId}
                name={questionId}
                onChange={() => {
                  if (!isQuestionSubmited) {
                    setSelectedAlternative(index);
                  }
                }}
                type="radio"
                checked={isSelected}
              />
              {alternative}
            </Topic>
          );
        })}

        <Button
          type="submit"
          disabled={!hasAlternativeSelected || isQuestionSubmited}
          as={motion.button}
          animate={{ scale: hasAlternativeSelected ? 1.1 : 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Confirmar
        </Button>

        {isQuestionSubmited && isCorrect && (
          <p style={{ textAlign: 'center' }}>Você acertou!</p>
        )}
        {isQuestionSubmited && !isCorrect && (
          <p style={{ textAlign: 'center' }}>Você errou!</p>
        )}
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
    }, 2000);
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

      <QuizContainer
        as={motion.section}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
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
