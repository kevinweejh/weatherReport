import { createElement, appendMultipleChildren } from "./utils";
import AddDialog from './addDialog';
import ShowDialog from './showDialog';

export default () => {
  const container = document.querySelector("body");

  const bgLayer = createElement(
    "div",
    ["bg-[url('./weather.jpg')]", 'h-screen', 'flex', 'flex-col'],
    "",
  );

  const overlay = createElement(
    "div",
    [
      "absolute",
      "top-0",
      "left-0",
      "w-full",
      "h-full",
      "object-cover",
      "z-0",
      "bg-black/80",
    ],
    "",
  );

  AddDialog();

  const startBtn = createElement("btn", ["absolute", "top-1/2","left-1/2", "-translate-x-1/2", "-translate-y-1/2", "rounded-2xl", "cursor-pointer",  "py-3", "px-8", "font-semibold", "text-2xl", "hover:bg-black/80", "hover:border-solid", "hover:border-white", "hover:text-white", "border-4", "bg-white"], "Hit mE")
  startBtn.addEventListener('click', () => ShowDialog());

  appendMultipleChildren(container, bgLayer, overlay, startBtn);
};