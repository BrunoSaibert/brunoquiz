import React from 'react';
import Link from 'next/link';

import * as S from './styles';

const BackLinkArrow: React.FC<{ href: string }> = ({ href }) => {
  return (
    <Link href={href} passHref>
      <S.StyledLink>
        <S.SVG
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
            fillOpacity="0.87"
          />
        </S.SVG>
        <span>Início</span>
      </S.StyledLink>
    </Link>
  );
};

export default BackLinkArrow;
