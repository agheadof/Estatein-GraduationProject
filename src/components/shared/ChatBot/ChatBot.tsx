import { useRef, useEffect, useState, type ChangeEvent, type KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { chatbotTexts } from "../../../data/chatbotData";
import { InitialWelcomeMessage, WelcomeTipEffect } from "../../../utlis/WelcomeTipEffect";
import type { Message } from "../../../types/message";
import { ChatHandler } from "./ChatHandler";


const ChatBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcomeTip, setShowWelcomeTip] = useState(true);
  const [typingMessage, setTypingMessage] = useState<string | null>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  // Show welcome tip effect on mount
  WelcomeTipEffect(setShowWelcomeTip);

  // Add initial welcome message if chat is opened and empty
  InitialWelcomeMessage(isOpen, messages, setMessages);

  // Close chat on any click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        chatRef.current &&
        !chatRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Send user message and receive bot response
  const { sendMessage } = ChatHandler(
    setMessages,
    setTypingMessage,
    setLoading,
    setInput
  );
  // Handle user input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Send message on Enter key
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage(input);
  };

  return (
    <>
      {/* Welcome Tip */}
      <AnimatePresence>
        {showWelcomeTip && (
          <motion.div

            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-[90px] left-14 bg-gray20 text-white px-4 py-3 rounded-lg rounded-bl-none shadow-lg z-50 max-w-[280px] text-sm"
          >
            <p className="font-semibold mb-1">{chatbotTexts.welcomeTitle}</p>
            <p>{chatbotTexts.welcomeMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <div className="fixed bottom-6 left-6 z-50 group">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-[50px] h-[50px] rounded-full  bg-purple75 dark:bg-gray15 border-none font-semibold flex items-center justify-center shadow-[0_0_0_4px_rgba(180,160,255,0.253)] cursor-pointer overflow-hidden transition-all duration-300 group-hover:w-[140px] group-hover:rounded-full group-hover:bg-purple70"
          aria-label="Open Chatbot"
        >
          <img
            src="/assets/icons/bot.svg"
            alt="Chat Icon"
            className="w-7 transition-transform duration-300 group-hover:-translate-y-[200%]"
          />
          <span className="absolute text-white text-[0px] group-hover:text-[13px] group-hover:bottom-auto transition-all duration-300">
            {chatbotTexts.toggleTitle}
          </span>
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-[100px] left-6 z-40 bg-gray10 border border-gray15 shadow-xl h-[70vh] w-[80vw] max-w-[400px] rounded-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gray15">
              <div className="flex items-center gap-3">
                <img src="/assets/icons/bot.svg" alt="Logo" className="w-10 h-10" />
                <div>
                  <h2 className="text-lg font-semibold text-white">{chatbotTexts.headerTitle}</h2>
                  <p className="text-sm text-gray60">{chatbotTexts.headerSubtitle}</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="cursor-pointer p-2 hover:bg-gray20 rounded-full transition">
                <img src="/assets/icons/close.svg" alt="Close" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}>
                  {msg.role === "bot" && (
                    <span className="text-xs text-gray50 mb-1">
                      {chatbotTexts.botLabel(msg.timestamp)}
                    </span>
                  )}
                  <div className={`px-4 py-2 text-sm rounded-lg max-w-[100%] ${msg.role === "user"
                    ? "bg-gray30 text-white rounded-br-none"
                    : "bg-gray20 text-white rounded-bl-none"
                    }`}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {typingMessage && (
                <div className="flex flex-col items-start">
                  <div className="text-xs text-gray50 mb-1">
                    {chatbotTexts.typingLabel}
                  </div>
                  <div className="px-4 py-2 text-sm rounded-lg max-w-[100%] bg-gray20 text-white rounded-bl-none">
                    {typingMessage}
                  </div>
                </div>
              )}
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && messages[0].role === "bot" && (
              <div className="px-4 pb-2 space-y-2">
                <p className="text-xs text-gray60">{chatbotTexts.suggestedIntro}</p>
                <div className="flex flex-wrap gap-2">
                  {chatbotTexts.suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => sendMessage(question)}
                      className="bg-gray15 text-white text-xs px-3 py-1 rounded-full hover:bg-gray20 transition"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="flex p-3 gap-2 bg-gray08">
              <input
                className="flex-1 bg-gray15 text-white px-4 py-2 text-sm focus:outline-none rounded-3xl placeholder-gray50"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder={chatbotTexts.placeholder}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={loading}
                className="bg-gray30 text-white px-4 py-2 rounded-full text-sm"
              >
                {loading ? (
                  <img src="/assets/icons/stop.svg" alt="Stop" className="w-5 h-5" />
                ) : (
                  <img src="/assets/icons/send.svg" alt="Send" className="w-5 h-5" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;

