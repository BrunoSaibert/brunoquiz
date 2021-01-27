import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import HeadContent from '../src/components/HeadContent';
import Logo from '../src/components/Logo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';

import db from '../db.json';

function Quiz() {
  const router = useRouter();

  const [name, setName] = useState('');

  useEffect(() => {
    setName(router.query.name);
  }, []);

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
}

export default Quiz;
