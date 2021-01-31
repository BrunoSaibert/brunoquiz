import console from 'console';
import { GetServerSideProps } from 'next';
import { ThemeProvider } from 'styled-components';

import Quiz from '../../container/Quiz';
import { DB } from '../../lib/db';

export interface Props {
  dbExterno: DB;
}

const QuizDaGalera: React.FC<Props> = ({ dbExterno }) => {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <Quiz db={dbExterno} />
    </ThemeProvider>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const dataId = query.id;

  const [projectName, githubUser] = String(dataId).split('___');

  const dbExterno = await fetch(
    `https://${projectName}.${githubUser}.vercel.app/api/db`,
  )
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Falha em pegar os dados');
    })
    .then(res => res)
    .catch(err => console.error(err));

  return {
    props: {
      dbExterno,
    },
  };
};

export default QuizDaGalera;
