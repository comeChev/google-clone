import "./globals.css";

export const metadata = {
  title: "Google Clone",
  description:
    "A clone of Google to make searching easier. An educational project to improve developing abilities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
