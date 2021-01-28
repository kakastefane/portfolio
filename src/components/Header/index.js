import React from 'react';
import styled from 'styled-components';

import Image from 'next/image';

const Wrapper = styled.header`
  width: 100%;
  padding: 30px 0;
  //color: ${({ theme }) => theme.colors.primary};
`;

Wrapper.Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SiteName = styled.h1`
  display: flex;
  align-items: center;
  font-size: 24px;

  span {
    margin-left: 15px;
  }
`;

const Menu = styled.nav`
  display: flex;
`;

Menu.Link = styled.a`
  position: relative;
  display: flex;
  text-decoration: none;
  color: #000;
  margin: 0 20px;
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:last-child {
    margin-right: 0;
  }

  &:first-child {
    margin-left: 0;
  }
`;

export default function Header() {
  return (
    <>
      <Wrapper>
        <Wrapper.Container>
          <SiteName>
            <Image
              src="/img/ico-karistondev.svg"
              alt="Icone"
              layout="fixed"
              width={50}
              height={50}
            />
            <span>kariston.dev</span>
          </SiteName>
          <Menu>
            <Menu.Link href="#">Home</Menu.Link>
            <Menu.Link href="#">About me</Menu.Link>
            <Menu.Link href="#">Projects</Menu.Link>
            <Menu.Link href="#">Contact me</Menu.Link>
          </Menu>
        </Wrapper.Container>
      </Wrapper>
    </>
  );
}
