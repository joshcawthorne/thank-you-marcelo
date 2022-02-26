import styled from "styled-components";

const TextContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 2;
  flex-direction: column;
`;

const Title = styled.div`
  color: #fff;
  font-size: 62px;
  font-weight: 700;
  margin-bottom: 20px;
  span {
    color: #fbf200;
  }
  @media (max-width: 760px) {
    font-size: 42px;
  }
`;

const Description = styled.div`
  color: #fff;
  max-width: 580px;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 24px;
  padding-right: 20px;
  p {
    margin-bottom: 20px;
  }
  @media (max-width: 760px) {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 20px;
    p {
      margin-bottom: 15px;
    }
  }
`;

function TextContent() {
  return (
    <TextContentContainer>
      <Title>
        <span>Gracias,</span> Marcelo.
      </Title>
      <Description>
        <p>
          While this isn't how we dreamed our journey would end, we will be
          forever greatful to Marcelo Bielsa for what he has done for our club
          over the past four years.
        </p>
        <p>
          We, therefore, wanted to provide a way for fans to express their
          gratitude and thanks to Marcelo. Submit your message to Marcelo here,
          and we will compile them all and send them to Marcelo on your behalf.
        </p>
      </Description>
    </TextContentContainer>
  );
}

export default TextContent;
