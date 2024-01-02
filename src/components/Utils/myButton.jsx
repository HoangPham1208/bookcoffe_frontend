import { CustomFlowbiteTheme } from "flowbite-react";

export const customTheme = {
  color: {
    primary:
      'bg-[#916239] hover:bg-[#7a5330] text-white p-1 hover:shadow-3 transition ',
    secondary: 'bg-white border-[#916239] text-[#916239] p-1 hover:shadow-3 transition border-2 ',
  },
  pill: {
    off: 'rounded-lg',
    on: 'rounded-full',
  },
  disabled: 'cursor-not-allowed opacity-50 hover:shadow-0',
  isProcessing: 'cursor-wait',
  spinnerSlot: 'absolute h-full top-0 flex items-center animate-fade-in',
};