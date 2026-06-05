"use client";

import { useState } from "react";

interface DropdownItem {
    label: string;
    href: string;
}

interface DropdownProps {
    triggerText: string;
    items: DropdownItem[];
}

export default function Dropdown({ triggerText, items }: DropdownProps) {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => setIsOpen((prev) => !prev);

    return (
        <div className="relative inline-block text-left">
            {/* Dropdown Trigger Button */}
            <button
            onClick={toggleDropdown}
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                {triggerText}
                <svg
                className="w-5 h-5 ml-2 -mr-1"
                xmlns="http://w3.org"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                {/* <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
                /> */}
                </svg>
            </button>

            {/* Dropdown Menu List */}
            {isOpen && (
            <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="py-1">
                {items.map((item, index) => (
                <a
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
                >
                    {item.label}
                </a>
                ))}
                </div>
            </div>
            )}
        </div>
    );
}
