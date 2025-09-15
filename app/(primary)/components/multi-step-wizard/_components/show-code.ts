export const title = "Multi Step Wizard";
export const routepoint = "multi-step-wizard";
export const description = "Complete form wizard with progress tracking, validation, and smooth step transitions. Perfect for onboarding flows and complex forms.";

export const cliscript = "add https://keerui.dev/registry/multi-step-wizard.json";

export const commandMap = {
  npm: `npx shadcn@latest ${cliscript}`,
  pnpm: `pnpm dlx shadcn@latest ${cliscript}`,
  yarn: `npx shadcn@latest ${cliscript}`,
  bun: `bunx --bun shadcn@latest ${cliscript}`,
};

export const utilcode = `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;

const packagescript = "motion lucide-react clsx tailwind-merge";

export const packagesMap = {
  npm: `npm i ${packagescript}`,
  pnpm: `pnpm add ${packagescript}`,
  yarn: `yarn add ${packagescript}`,
  bun: `bun add ${packagescript}`,
};

export const multiStepWizardProps = [
  {
    prop: "steps",
    type: "Step[]",
    default: "defaultSteps",
    description: "Array of step objects with id, name, icon, and fields.",
  },
  {
    prop: "onComplete",
    type: "function",
    default: "undefined",
    description: "Callback function when wizard is completed.",
  },
];

export const democode = `import MultiStepWizard from '@/components/keerui/multi-step-wizard';

export function ${title.replace(/\s+/g, "")}Example() {
  const handleComplete = (data) => {
    console.log('Form completed:', data);
  };

  return (
    <div className="p-8">
      <MultiStepWizard onComplete={handleComplete} />
    </div>
  );
}`;

export const code = `"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, ChevronRight, User, Mail, CreditCard, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, name: "Personal", icon: User },
  { id: 2, name: "Account", icon: Mail },
  { id: 3, name: "Payment", icon: CreditCard },
  { id: 4, name: "Security", icon: Shield },
];

export default function MultiStepWizard({ onComplete }: { onComplete?: (data: any) => void }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: "", email: "", username: "", password: "",
    card: "", expiry: "", "2fa": false, backup: ""
  });

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name.trim() && formData.email.trim();
      case 2:
        return formData.username.trim() && formData.password.trim();
      case 3:
        return formData.card.trim() && formData.expiry.trim();
      case 4:
        return formData.backup.trim();
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length && isStepValid()) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
    } else if (currentStep === steps.length) {
      onComplete?.(formData);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setCompletedSteps(completedSteps.filter(step => step < currentStep - 1));
    }
  };

  const isCompleted = (stepId: number) => completedSteps.includes(stepId);
  const isCurrent = (stepId: number) => currentStep === stepId;

  const renderStepContent = () => {
    const inputClass = "w-full p-3 text-sm rounded-lg bg-neutral-900/50 border border-neutral-700/50 text-neutral-100 placeholder-neutral-500 focus:border-blue-500/50 focus:outline-none transition-colors";
    
    switch (currentStep) {
      case 1:
        return (
          <>
            <input
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className={inputClass}
            />
          </>
        );
      case 2:
        return (
          <>
            <input
              placeholder="Username"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              className={inputClass}
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className={inputClass}
            />
          </>
        );
      case 3:
        return (
          <>
            <input
              placeholder="Card Number"
              value={formData.card}
              onChange={(e) => setFormData({...formData, card: e.target.value})}
              className={inputClass}
            />
            <input
              placeholder="Expiry Date"
              value={formData.expiry}
              onChange={(e) => setFormData({...formData, expiry: e.target.value})}
              className={inputClass}
            />
          </>
        );
      case 4:
        return (
          <>
            <label className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900/30 border border-neutral-700/30 cursor-pointer hover:bg-neutral-900/50 transition-colors">
              <input
                type="checkbox"
                checked={formData["2fa"]}
                onChange={(e) => setFormData({...formData, "2fa": e.target.checked})}
                className="w-4 h-4 text-blue-600 rounded border-neutral-600 bg-neutral-800"
              />
              <span className="text-sm text-neutral-300">Enable Two-Factor Authentication</span>
            </label>
            <input
              placeholder="Recovery Email"
              value={formData.backup}
              onChange={(e) => setFormData({...formData, backup: e.target.value})}
              className={inputClass}
            />
          </>
        );
    }
  };

  return (
    <article className="relative w-full max-w-md mx-auto bg-neutral-950 rounded-xl border border-neutral-800/60 overflow-hidden shadow-2xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col h-[32rem]"
      >
        {/* Progress Header */}
        <header className="p-6 border-b border-neutral-800/60 bg-gradient-to-r from-neutral-950 to-neutral-900">
          <nav className="flex items-center justify-between mb-4" aria-label="Form progress">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={step.id}>
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: isCurrent(step.id) ? 1.1 : 1 }}
                    className={cn(
                      "relative w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all duration-300",
                      isCompleted(step.id) 
                        ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/25" 
                        : isCurrent(step.id) 
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
                        : "bg-neutral-800 text-neutral-500"
                    )}
                    aria-current={isCurrent(step.id) ? "step" : undefined}
                  >
                    {isCompleted(step.id) ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div className={cn(
                      "flex-1 h-0.5 mx-2 transition-colors duration-300",
                      isCompleted(step.id) ? "bg-emerald-600" : "bg-neutral-800"
                    )} />
                  )}
                </React.Fragment>
              );
            })}
          </nav>
          <p className="text-sm text-neutral-400">
            Step {currentStep} of {steps.length}: {steps[currentStep - 1].name}
          </p>
        </header>

        {/* Form Content */}
        <main className="flex-1 p-6">
          <motion.form
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4 h-full flex flex-col justify-center"
          >
            {renderStepContent()}
          </motion.form>
        </main>

        {/* Navigation */}
        <footer className="p-6 border-t border-neutral-800/60 bg-neutral-950/80 backdrop-blur-sm">
          <nav className="flex justify-between items-center">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handlePrev}
              disabled={currentStep === 1}
              className="px-4 py-2 text-sm font-medium text-neutral-400 border border-neutral-700 rounded-lg hover:bg-neutral-800 hover:text-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Previous
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNext}
              disabled={!isStepValid()}
              className={\`flex items-center gap-2 px-6 py-2 text-sm font-medium rounded-lg shadow-lg transition-all \${
                isStepValid() 
                  ? "text-white bg-blue-600 hover:bg-blue-700 shadow-blue-600/25" 
                  : "text-neutral-500 bg-neutral-800 cursor-not-allowed shadow-neutral-800/25"
              }\`}
            >
              {currentStep === steps.length ? "Complete" : "Next"}
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </nav>
        </footer>
      </motion.div>
    </article>
  );
}`;
