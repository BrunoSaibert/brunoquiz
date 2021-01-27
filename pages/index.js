import React, { useState } from 'react';
import { useRouter } from 'next/router';

import HeadContent from '../src/components/HeadContent';
import Logo from '../src/components/Logo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

import db from '../db.json';

export default function Home() {
  const router = useRouter();

  const [name, setName] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <HeadContent title={db.title} bg={db.bg} description={db.description} />

      <QuizContainer>
        <Logo />

        <Widget header={<h1>{db.title}</h1>}>
          <p>{db.description}</p>

          <form onSubmit={onSubmit}>
            <Input
              placeholder="Informe seu nome"
              onChange={e => setName(e.target.value)}
            />

            <Button type="submit" disabled={name.length === 0}>
              Jogar
            </Button>
          </form>
        </Widget>

        <Widget>
          <h1>Quizes da Galera</h1>

          <p>lorem ipsum dolor sit amet...</p>
        </Widget>

        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/BrunoSaibert" />
    </QuizBackground>
  );
}
