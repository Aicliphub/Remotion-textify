import React from "react";
import { z } from "zod";
import { appLayoutSchema } from "../../schema";
import IMessageHeader from "./IMessageHeader";
import MessengerHeader from "./MessengerHeader";
import WhatsappHeader from "./WhatsappHeader";

interface HeaderProps {
  appLayout: z.infer<typeof appLayoutSchema>;
  chunkIndex: number;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { appLayout, chunkIndex } = props;
  return (
    (appLayout.header.showOnAllPages || chunkIndex === 0) &&
    (
      appLayout.style === "imessage" ? (
        <IMessageHeader {...appLayout} />
      ) : appLayout.style === "messenger" ? (
        <MessengerHeader {...appLayout} />
      ) : appLayout.style === "whatsapp" ? (
        <WhatsappHeader {...appLayout} />
      ) : null
    )
  );
};

export default Header;
