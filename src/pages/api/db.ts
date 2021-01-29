import { NextApiRequest, NextApiResponse } from 'next';

import db from '../../lib/db';

export default function dbHandler(
  request: NextApiRequest,
  response: NextApiResponse,
): void {
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  response.setHeader('Access-Control-Allow-Credentials', 'true');
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  );

  response.json(db);
}
