import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  width: 100%;
  padding: 30px 0;
`;

Wrapper.Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Footer() {
  return (
    <>
      <Wrapper>
        <Wrapper.Container>
          Footer
        </Wrapper.Container>
      </Wrapper>
    </>
  );
}
