"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";

export default function ThemeButton() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex cursor-pointer items-center">
      {mounted && currentTheme === "light" ? (
        <MdOutlineDarkMode
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <BsSun
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
}
