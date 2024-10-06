"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    embeddedChatbotConfig: {
      chatbotId: string;
      domain: string;
    };
  }
}

export default function Chatbot() {
  useEffect(() => {
    window.embeddedChatbotConfig = {
      chatbotId: "E3Ve63tafYTei_IxLtqnD",
      domain: "www.chatbase.co",
    };
  }, []);

  return (
    <>
      <Script
        src="https://www.chatbase.co/embed.min.js"
        strategy="lazyOnload"
      />
    </>
  );
}
