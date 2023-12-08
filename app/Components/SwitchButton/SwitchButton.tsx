"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
const SwitchButton = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) return null;

  return (
    <button
      className=" p-1 rounded-full bg-secondary dark:bg-primary text-primary dark:text-secondary relative"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? <SunIcon className="text-secondary h-6 w-6" /> : <MoonIcon className="text-primary h-6 w-6"  />}
    </button>
  );
};

export default SwitchButton;
