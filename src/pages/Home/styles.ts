import styled from 'styled-components';

export const Container = styled.main`
  background: var(--color-primary);
  min-height: 100%;
  padding: 4.8rem 4rem 2rem;

  display: grid;
  place-items: center;
  overflow: hidden;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 850px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  @media (min-width: 850px) {
    flex-direction: row-reverse;
    align-items: center;

    > div {
      width: 100%;
    }
  }
`;

export const LandingImg = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 8rem;

  @media (min-width: 850px) {
    flex-shrink: 1;
    max-width: min(70rem, 60vw);
    margin-bottom: 0;
  }
`;

export const Logo = styled.img`
  width: max(20rem, 30vw);
  height: auto;

  @media (min-width: 850px) {
    max-width: 32rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: var(--color-title-in-primary);

  @media (min-width: 850px) {
    width: 20rem;
    margin-top: 1.2rem;
    color: var(--color-text-in-primary);
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  @media (min-width: 750px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  > a {
    flex: 1;
    min-height: 15.8rem;
    padding: 2.4rem;

    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    + a {
      margin-left: 1.6rem;
    }

    > span {
      font-size: 2rem;
      text-align: left;
    }

    @media (min-width: 850px) {
      min-height: auto;
      height: 11.2rem;

      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Icon = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const Description = styled.p`
  width: 18rem;
  margin-top: 4rem;

  font-size: 1.6rem;
  color: var(--color-text-in-primary);

  @media (min-width: 750px) {
    width: auto;
    margin-top: 0;
    margin-left: 2.4rem;
    text-align: right;
  }
`;

export const PurpleHeartIcon = styled.img`
  margin-left: 0.8rem;
`;
