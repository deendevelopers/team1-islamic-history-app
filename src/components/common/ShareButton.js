import React, { useState } from "react";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import RcQueueAnim from "rc-queue-anim";

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";

const ShareDialogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  padding: 10px;
`;

const ShareButton = ({ description }) => {
  const [shareDialog, setShareDialog] = useState(false);

  if (shareDialog) {
    return (
      <ShareDialogWrapper onClick={() => setShareDialog(!shareDialog)}>
        <RcQueueAnim delay={700}>
          <FacebookShareButton
            key={1}
            url={window.location}
            quote={description}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <TwitterShareButton key={2} url={window.location} quote={description}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <WhatsappShareButton
            key={3}
            url={window.location}
            quote={description}
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

          <TelegramShareButton
            key={4}
            url={window.location}
            quote={description}
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>

          <EmailShareButton
            key={5}
            url={window.location}
            subject={"Check out this really cool quote"}
            body={description}
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
        </RcQueueAnim>
      </ShareDialogWrapper>
    );
  }
  return (
    <FontAwesomeIcon
      icon={faShareSquare}
      size={"lg"}
      onClick={() => setShareDialog(!shareDialog)}
    />
  );
};

export default ShareButton;
