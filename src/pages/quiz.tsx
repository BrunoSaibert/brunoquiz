import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import HeadContent from '../components/HeadContent';
import Logo from '../components/Logo';
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import Widget from '../components/Widget';
import Footer from '../components/Footer';

import db from '../lib/db';

const Quiz: React.FC = () => {
  const router = useRouter();

  const [name, setName] = useState('');

  useEffect(() => {
    setName(String(router.query.name));
  }, [router.query.name]);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <HeadContent title={db.title} bg={db.bg} description={db.description} />

      <QuizContainer>
        <Logo />

        <Widget>
          <h1>Olá {name}</h1>

          <p>Ainda estamos construindo esta página</p>
        </Widget>

        <Footer />
      </QuizContainer>
    </QuizBackground>
  );
};

export default Quiz;
