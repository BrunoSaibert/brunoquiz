import db from '../../db.json';

type Theme = {
  readonly colors: {
    primary: string;
    secondary: string;
    mainBg: string;
    contrastText: string;
    wrong: string;
    success: string;
  };
  readonly borderRadius: string;
};

type Question = {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly answer: number;
  readonly alternatives: string[];
};

export type DB = {
  readonly bg: string;
  readonly title: string;
  readonly description: string;
  readonly questions: Question[];
  readonly external: string[];
  readonly theme: Theme;
};

export default (db as unknown) as DB;
