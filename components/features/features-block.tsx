"use client";

import React from "react";
import DataTable from "./data-table";
import AIProcessing from "./ai-processing";

const FeaturesBlock = () => {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 py-12 lg:py-6">
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <DataTable />
        <AIProcessing />
      </div>
    </div>
  );
};

export default FeaturesBlock;