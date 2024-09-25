import styled from "styled-components";

const CardContainer = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100%;
  max-width: 400px;
  margin: 2em auto;
  border-radius: 15px;
  margin-bottom: 1rem;
  padding: 2rem;
`;

const HeroImageContainer = styled.a`
  position: relative;
  display: block;

  &::after {
    content: '';
    background-image: url("https://i.postimg.cc/9MtT4GZY/view.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 5rem;
    background-color: hsla(220, 33%, 98%, 0.3);
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  border-radius: 15px;
  display: block;
`;

const MainContent = styled.main`
  padding: 1.2em 0;

  h1 {
    font: var(--var-heading);
    color: var(--var-lightest);
  }

  p {
    font: var(--var-para);
    color: var(--var-soft-blue);
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CoinBase = styled.div`
  display: flex;
  align-items: center;
  padding: 1em 0;

  h2 {
    font: var(--var-small-heading);
    color: var(--var-lightest);
  }
`;

const TimeLeft = styled.div`
  display: flex;
  align-items: center;
  padding: 1em 0;

  p {
    font: var(--var-para);
  }
`;

const SmallImage = styled.img`
  width: 1.2em;
  margin-right: 0.5em;
`;


const WebsiteType = styled.p`
  text-align: center;
`


const Card = ({preview, color, type, time, templatecode, link}) => {
  return (
    <div>
      <CardContainer bgColor = {color}>
        <HeroImageContainer href={link} target="_blank">
          <HeroImage
            src={preview}
            alt="Spinning glass cube"
          />
        </HeroImageContainer>
        <MainContent>
          <WebsiteType>{type}</WebsiteType>
          <FlexRow>
            <CoinBase>
              <h2>{templatecode}</h2>
            </CoinBase>
            <TimeLeft>
              <SmallImage
                src="https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png"
                alt="clock"
              />
              <p>{time}</p>
            </TimeLeft>
          </FlexRow>
        </MainContent>
      </CardContainer>
    </div>
  );
};

export default Card;
