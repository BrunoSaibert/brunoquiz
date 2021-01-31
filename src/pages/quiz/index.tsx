import React from 'react';

import Quiz from '../../container/Quiz';

import db from '../../lib/db';

const QuizPage: React.FC = () => {
  return <Quiz db={db} />;
};

export default QuizPage;
