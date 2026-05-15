import React from 'react';
import { cn } from '../../lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  showBrackets?: boolean;
}

export const GlassCard = ({ children, className, showBrackets = false }: GlassCardProps) => {
  return (
    <div className={cn("glass-card p-8 border-primary/20 relative overflow-hidden group", className)}>
      {showBrackets && (
        <>
          <div className="optical-bracket optical-bracket-tl" />
          <div className="optical-bracket optical-bracket-tr" />
          <div className="optical-bracket optical-bracket-bl" />
          <div className="optical-bracket optical-bracket-br" />
        </>
      )}
      {children}
    </div>
  );
};
