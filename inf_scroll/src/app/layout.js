import "./globals.css";

export const metadata = {
  title: "scrollable list page",
  description: "A single page application showcasing an infinitely scrolling list of cards",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body lang="eng">
        {children}
      </body>
    </html>
  );
}
