import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import HeadContent from '../components/HeadContent';
import Logo from '../components/Logo';
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import Widget, { containerVariants } from '../components/Widget';
import GitHubCorner from '../components/GitHubCorner';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from '../components/Button';
import Topic from '../components/Topic';

import db from '../lib/db';

const Home: React.FC = () => {
  const router = useRouter();

  const [name, setName] = useState('');

  const handleGoToNextRoute = (route: string): void => {
    if (name.length > 0) {
      router.push(`/${route}?name=${name}`);
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

        <Widget
          as={motion.section}
          variants={containerVariants}
          header={<h1>{db.title}</h1>}
        >
          <p>{db.description}</p>

          <Input
            placeholder="Informe seu nome"
            onChange={e => setName(e.target.value)}
          />

          <Button
            type="button"
            disabled={name.length === 0}
            onClick={() => handleGoToNextRoute('quiz')}
          >
            Jogar
          </Button>
        </Widget>

        <Widget as={motion.section} variants={containerVariants}>
          <h1>Quizes da Galera</h1>

          <p>Informe seu nome para jogar um quiz da galera</p>

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
                  <Topic
                    as="span"
                    data-disabled={name.length === 0}
                    onClick={() =>
                      handleGoToNextRoute(`quiz/${projectName}___${githubUser}`)
                    }
                  >{`${projectName}/${githubUser}`}</Topic>
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
