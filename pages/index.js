import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const Hero = styled.section`
  width: 100%;
`;

Hero.Container = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;

Hero.Title = styled.h2`
  font-size: 50px;
`;

Hero.Subtitle = styled.p`
  font-size: 18px;
`;

Hero.Button = styled.a`
  border: 1px solid #000;
  padding: 5px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>kariston.dev</title>
      </Head>
      <Header />
      <Hero>
        <Hero.Container>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Hero.Title>Hi, I'm Kariston Silva, web developer.</Hero.Title>
          <Hero.Subtitle>Front End Developer / Wordpress Expert</Hero.Subtitle>
          <Hero.Button href="#">Contact me!</Hero.Button>
        </Hero.Container>
      </Hero>
      <Footer />
    </>
  );
}
