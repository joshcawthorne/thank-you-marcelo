import { useEffect } from "react";
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const ButtonTwoContainer = styled.div`
  margin-left: 10px;
  @media (max-width: 475px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

function Submitted({ message, email, nam, cookieSubmitted }) {
  useEffect(() => {
    sendEmail();
  }, []);

  let nameParsed = name;
  if (name.includes(" ")) {
    nameParsed = name.split(" ")[0];
  }
  let messageData = message;
  var messageCutLength = 197;
  if (message.length > 194) {
    messageData = message.substring(0, messageCutLength) + "...";
  }

  let twitterShare = `My message to Marcelo: "${messageData}". Add your own:`;
  console.log(twitterShare);

  let whatsAppShare =
    `My message to Marcelo Bielsa: ` +
    message +
    ". Add your own at https://gracias-marcelo.lufctrust.com";

  if (cookieSubmitted) {
    twitterShare = "Send a message of thanks to Marcelo Bielsa! Visit ";
    whatsAppShare =
      "Send a message of thanks to Marcelo Bielsa! Visit https://gracias-marcelo.lufctrust.com";
  }

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

  function sendEmail() {
    console.log("Attempting Send Question");

    var formdata = new FormData();
    formdata.append("messageContent", message);
    formdata.append("email", email);
    formdata.append("userName", nameParsed);
    formdata.append("userNameFull", name);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://new.leedsunitedtrust.com/gracias.php", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <ContentContainer>
      <Title>
        {cookieSubmitted
          ? "It looks like you already submitted a messsage"
          : "Message submitted!"}
      </Title>
      <Desc>
        {cookieSubmitted
          ? "Share on Social Media so others can add a message too?"
          : "Share your message on Social Media?"}
      </Desc>
      <ButtonContainer>
        <Button text={"Share on Twitter"} action={handleTwitterShare} />
        <ButtonTwoContainer>
          <Button text={"Share on WhatsApp"} action={handleWhatsAppShare} />
        </ButtonTwoContainer>
      </ButtonContainer>
    </ContentContainer>
  );
}

export default Submitted;
