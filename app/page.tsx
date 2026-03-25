"use client";
import React, { useState } from "react";
import confetti from "canvas-confetti";

const page = () => {
  const [laCount, setLaCount] = useState(0);
  const [isAhPressed, setIsAhPressed] = useState(false);

  const messages = [
    "Katbghini? 🥺",
    "Wach mt2kda?",
    "Fkri mzian",
    "Choufi wkan",
    "7awli mrra akhra",
    "Wa zidi fkri",
    "Goli AH 3afak",
    "Goli Ah🥹",
    "Safi makhassnich...",
    "Ghir kankdb GOLI AH!"
  ];

  const handleLaClick = () => {
    setLaCount(laCount + 1);
  };

  const handleAhClick = () => {
    setIsAhPressed(true);
    
    // Fire multiple confetti bursts for a great celebration!
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#efb7ca', '#ffffff', '#ff5252']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#efb7ca', '#ffffff', '#ff5252']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    
    frame();
  };

  const getMessageText = () => {
    return messages[Math.min(laCount, messages.length - 1)];
  };

  const getAhButtonSize = () => {
    return {
      fontSize: `${24 + laCount * 20}px`,
      padding: `${10 + laCount * 8}px ${20 + laCount * 12}px`
    };
  };

  return (
    <div className="flex w-screen h-screen mx-auto flex-col justify-center items-center p-4">
      <div>
        <img src="/katbghini.png" className="h-60" alt="katbghini" />
      </div>
      
      {isAhPressed ? (
        <div className="text-5xl font-bold text-[#d86a8f] mt-8 text-center">
          Yaaay! 💖
        </div>
      ) : (
        <>
          <div className="text-4xl text-[#d86a8f] mt-6 mb-4 font-bold transition-all duration-300">
            {getMessageText()}
          </div>
          <div className="flex gap-4 items-center justify-center">
            <button 
              className="comic-button" 
              style={getAhButtonSize()}
              onClick={handleAhClick}
            >
              AH
            </button>
            <button 
              className="comic-button bg-[#d86a8f] min-w-[80px]" 
              onClick={handleLaClick}
              style={{
                transform: `scale(${Math.max(1 - laCount * 0.05, 0.5)})`,
                transition: 'all 0.3s ease'
              }}
            >
              LA
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default page;
