"use client";

import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "./theme-provider";

export function ModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-3 rounded-full cursor-pointer relative overflow-hidden"
      onClick={toggleTheme}
    >
      <SunIcon 
        className={`size-5 absolute transition-all duration-500 ease-in-out ${
          theme === 'light' 
            ? 'rotate-0 opacity-100 scale-100' 
            : 'rotate-180 opacity-0 scale-75'
        }`} 
      />
      
      <MoonIcon 
        className={`size-5 absolute transition-all duration-500 ease-in-out ${
          theme === 'dark' 
            ? 'rotate-0 opacity-100 scale-100' 
            : '-rotate-180 opacity-0 scale-75'
        }`} 
      />
    </Button>
  );
}