import db from '../../db.json';

type Theme = {
  readonly color: {
    primary: string;
    secondary: string;
    mainBg: string;
    contrastText: string;
    gray: string;
    wrong: string;
    success: string;
  };
  readonly borderRadius: string;
};

type DB = {
  readonly bg: string;
  readonly title: string;
  readonly description: string;
  readonly theme: Theme;
};

export default (db as unknown) as DB;
