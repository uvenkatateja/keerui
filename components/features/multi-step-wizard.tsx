"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { Check, ChevronRight, User, Mail, CreditCard, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import ComponentContainer from "./component-container";

type MultiStepWizardProps = {
  cardTitle?: string;
  cardDescription?: string;
};

const steps = [
  { id: 1, name: "Personal", icon: User },
  { id: 2, name: "Account", icon: Mail },
  { id: 3, name: "Payment", icon: CreditCard },
  { id: 4, name: "Security", icon: Shield },
];

const MultiStepWizard = ({}: MultiStepWizardProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: "", email: "", username: "", password: "",
    card: "", expiry: "", "2fa": false, backup: ""
  });

  useEffect(() => {
    setMounted(true);
  }, []);

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
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      // Remove steps that are >= current step from completed steps
      setCompletedSteps(completedSteps.filter(step => step < currentStep - 1));
    }
  };

  const isCompleted = (stepId: number) => completedSteps.includes(stepId);
  const isCurrent = (stepId: number) => currentStep === stepId;

  const isDark = mounted ? (resolvedTheme === 'dark') : true;

  const renderStepContent = () => {
    const inputClass = `w-full p-3 text-sm rounded-lg border focus:border-blue-500/50 focus:outline-none transition-colors ${
      isDark 
        ? 'bg-neutral-900/50 border-neutral-700/50 text-neutral-100 placeholder-neutral-500'
        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
    }`;
    
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
            <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
              isDark 
                ? 'bg-neutral-900/30 border-neutral-700/30 hover:bg-neutral-900/50'
                : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
            }`}>
              <input
                type="checkbox"
                checked={formData["2fa"]}
                onChange={(e) => setFormData({...formData, "2fa": e.target.checked})}
                className={`w-4 h-4 text-blue-600 rounded ${
                  isDark ? 'border-neutral-600 bg-neutral-800' : 'border-gray-400 bg-white'
                }`}
              />
              <span className={`text-sm ${isDark ? 'text-neutral-300' : 'text-gray-700'}`}>
                Enable Two-Factor Authentication
              </span>
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
    <ComponentContainer>
      <article className={`relative w-full max-w-md mx-auto rounded-xl border overflow-hidden shadow-2xl ${
        isDark ? 'bg-neutral-950 border-neutral-800/60' : 'bg-white border-gray-200'
      }`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col h-[32rem]"
        >
          {/* Progress Header */}
          <header className={`p-6 border-b ${
            isDark 
              ? 'border-neutral-800/60 bg-gradient-to-r from-neutral-950 to-neutral-900'
              : 'border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100'
          }`}>
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
                          : (isDark ? "bg-neutral-800 text-neutral-500" : "bg-gray-200 text-gray-500")
                      )}
                      aria-current={isCurrent(step.id) ? "step" : undefined}
                    >
                      {isCompleted(step.id) ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                    </motion.div>
                    {index < steps.length - 1 && (
                      <div className={cn(
                        "flex-1 h-0.5 mx-2 transition-colors duration-300",
                        isCompleted(step.id) ? "bg-emerald-600" : (isDark ? "bg-neutral-800" : "bg-gray-300")
                      )} />
                    )}
                  </React.Fragment>
                );
              })}
            </nav>
            <p className={`text-sm ${isDark ? 'text-neutral-400' : 'text-gray-600'}`}>
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
          <footer className={`p-6 border-t backdrop-blur-sm ${
            isDark 
              ? 'border-neutral-800/60 bg-neutral-950/80'
              : 'border-gray-200 bg-white/80'
          }`}>
            <nav className="flex justify-between items-center">
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePrev}
                disabled={currentStep === 1}
                className={`px-4 py-2 text-sm font-medium border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all ${
                  isDark 
                    ? 'text-neutral-400 border-neutral-700 hover:bg-neutral-800 hover:text-neutral-300'
                    : 'text-gray-600 border-gray-300 hover:bg-gray-100 hover:text-gray-800'
                }`}
              >
                Previous
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`flex items-center gap-2 px-6 py-2 text-sm font-medium rounded-lg shadow-lg transition-all ${
                  isStepValid() 
                    ? "text-white bg-blue-600 hover:bg-blue-700 shadow-blue-600/25" 
                    : (isDark 
                      ? "text-neutral-500 bg-neutral-800 cursor-not-allowed shadow-neutral-800/25"
                      : "text-gray-500 bg-gray-200 cursor-not-allowed shadow-gray-200/25")
                }`}
              >
                {currentStep === steps.length ? "Complete" : "Next"}
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </nav>
          </footer>
        </motion.div>

      </article>
    </ComponentContainer>
  );
};

export default MultiStepWizard;
