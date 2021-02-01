import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'next-share';

import { Container } from './styles';

const Share: React.FC<{ url: string; title: string }> = ({ url, title }) => {
  return (
    <Container>
      <FacebookShareButton url={url} quote={title} hashtag={'#quizdagalera'}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <WhatsappShareButton url={url} title={title} separator=" ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </Container>
  );
};

export default Share;
