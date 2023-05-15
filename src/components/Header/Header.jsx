import Moon from "@/assets/images/icons/Moon";
import React from "react";

export default function Header() {
  return (
    <React.StrictMode>
      <header className="w-full h-14 flex items-center border-b border-solid border-gray100">
        <div className="container mx-auto max-w-screen-lg flex justify-between">
          <div className="flex items-center">
            <h1>WhatGPT.ai</h1>
          </div>
          <span className="text-sm text-gray200">
            Discover AI from Whatsapp
          </span>
          <div className="flex items-center gap-2">
            <Moon />
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </header>
    </React.StrictMode>
  );
}
