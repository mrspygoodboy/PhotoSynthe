"use client"; 
// Marks this component as a Client Component in Next.js (required for hooks, events, etc.)

// Sidebar component
export const Side = () => {
    return (
        // <aside> semantic element used for side content like navigation or tools
        <aside
            className="
                bg-white          /* White background */
                flex              /* Enable flexbox layout */
                flex-col          /* Stack children vertically */
                w-[100px]         /* Fixed width of 100px */
                h-full            /* Take full available height */
                border-r          /* Right border for visual separation */
                overflow-y-auto   /* Enable vertical scrolling if content overflows */
            "
        >
            {/* Sidebar content goes here */}
        </aside>
    );
};
