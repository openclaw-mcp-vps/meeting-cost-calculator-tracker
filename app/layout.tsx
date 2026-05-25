import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MeetingCost — Calculate the Real Cost of Your Meetings",
  description: "Connect your calendar, set team salaries, and instantly see how much your meetings actually cost. Track spending, reduce waste, and run leaner teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="441cbb27-26ff-4db7-a170-8144e37854a9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
