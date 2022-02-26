import styled, { css } from "styled-components";
import Button from "./Button";

const ContentContainer = styled.div`
  padding: 40px;
  @media (max-width: 760px) {
    padding: 20px;
  }
`;

const Title = styled.div`
  font-size: 36px;
  margin-bottom: 25px;
  font-weight: 700;
`;

const Desc = styled.div`
  font-size: 22px;
  margin-bottom: 25px;
  font-weight: 400;
`;

function Submitted({ message }) {
  let messageData = message;
  var messageCutLength = 197;
  if (message.length > 194) {
    messageData = message.substring(0, messageCutLength) + "...";
  }

  let twitterShare = `My message to Marcelo: "${messageData}". Add your own: `;
  console.log(twitterShare);

  let whatsAppShare =
    `My message to Marcelo Bielsa: ` +
    message +
    ". Add your own at https://gracias-marcelo.lufctrust.com";

  function handleTwitterShare() {
    const url =
      "https://twitter.com/intent/tweet?text=" +
      twitterShare +
      "&url=" +
      "https://gm.lufctrust.com" +
      "&hashtags=GraciasMarcelo";

    window.open(url, "_blank").focus();
  }

  function handleWhatsAppShare() {
    const url = "https://api.whatsapp.com/send?text=" + whatsAppShare;
    window.open(url, "_blank").focus();
  }

  return (
    <ContentContainer>
      <Title>Message submitted!</Title>
      <Desc>Share your message on Social Media</Desc>
      <Button text={"Share on Twitter"} action={handleTwitterShare} />
      <Button
        text={"Share on WhatsApp"}
        action={handleWhatsAppShare}
        styles={{ marginLeft: "10px" }}
      />
    </ContentContainer>
  );
}

export default Submitted;
