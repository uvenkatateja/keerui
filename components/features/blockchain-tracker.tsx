"use client";
import React, { useEffect, useState } from "react";
import ComponentContainer from "./component-container";
import BlockchainTracker from "@/app/(primary)/components/blockchain-tracker/_components/blockchain-tracker";

const BlockchainTrackerFeature = () => {
  const [animationKey, setAnimationKey] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ComponentContainer>
      <BlockchainTracker key={animationKey} />
    </ComponentContainer>
  );
};

export default BlockchainTrackerFeature;