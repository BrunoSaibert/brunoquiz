import React from 'react';
import Link from 'next/link';

import * as S from './styles';

const Logo: React.VFC = () => {
  return (
    <S.Container>
      <Link href="/">
        <a>
          <img src="/logo.png" alt="Logo Brunoquiz" />
        </a>
      </Link>
    </S.Container>
  );
};

export default Logo;
