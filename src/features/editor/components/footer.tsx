// My design skills suck, and I often forget CSS, so all my CSS stuff is always well-documented.
/*
  Tailwind CSS class breakdown for the <footer>:

  h-[52px] → Sets the footer height to exactly 52px
  border-t → Adds a border to the top of the footer
  bg-white → White background color
  w-full → Takes the full width of the viewport

  flex → Enables flexbox layout
  flex-row-reverse→ Lays out children horizontally but in reverse order
  items-center → Vertically centers items inside the footer

  overflow-x-auto → Allows horizontal scrolling if content overflows
  gap-x-1 → Adds horizontal spacing between child elements
  p-2 → Adds padding on all sides
  px-4 → Adds extra horizontal padding (left & right)

  shrink-0 → Prevents the footer from shrinking in flex layouts
  z-[49] → Sets a custom z-index to control stacking order
*/

"use client";

export const Footer = () => {
  return (
    <footer className="h-[52px] border-t bg-white w-full flex items-center overflow-x-auto z-[49] p-2 gap-x-1 shrink-0 px-4 flex-row-reverse">
      Footer here
    </footer>
  );
};
