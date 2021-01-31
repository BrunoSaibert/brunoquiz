import React, { SyntheticEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import HeadContent from '../components/HeadContent';
import Logo from '../components/Logo';
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import Widget from '../components/Widget';
import GitHubCorner from '../components/GitHubCorner';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from '../components/Button';
import Topic from '../components/Topic';

import db from '../lib/db';

const Home: React.FC = () => {
  const router = useRouter();

  const [name, setName] = useState('');

  const handleSubmit = (e: SyntheticEvent): void => {
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

          <form onSubmit={handleSubmit}>
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

          <ul
            style={{
              maxHeight: 200,
              overflow: 'auto',
              padding: '8px 8px 0',
              margin: '8px -8px',
            }}
          >
            {db.external.map((item, index) => {
              const [projectName, githubUser] = item
                .replace('https://', '')
                .replace('.vercel.app/', '')
                .split('.');

              return (
                <li key={index}>
                  <Link href={`quiz/${projectName}___${githubUser}`}>
                    <Topic>{`${projectName}/${githubUser}`}</Topic>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Widget>

        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/BrunoSaibert/brunoquiz" />
    </QuizBackground>
  );
};

export default Home;
