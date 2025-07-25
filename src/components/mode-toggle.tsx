"use client";

import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    return (
        <Button
            variant="ghost"
            type="button"
            size="icon"
            className="px-3 rounded-full cursor-pointer"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <SunIcon className="size-5 text-neutral-700 dark:hidden dark:text-neutral-200" />
            <MoonIcon className="hidden size-5 text-neutral-700 dark:block dark:text-neutral-200" />
        </Button>
    )
}