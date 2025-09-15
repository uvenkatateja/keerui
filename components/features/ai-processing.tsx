"use client";
import React, { useEffect, useState } from "react";
import ComponentContainer from "./component-container";
import AIProcessing from "@/app/(primary)/components/ai-processing/_components/ai-processing";

const AIProcessingFeature = () => {
  const [animationKey, setAnimationKey] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ComponentContainer>
      <AIProcessing key={animationKey} />
    </ComponentContainer>
  );
};

export default AIProcessingFeature;