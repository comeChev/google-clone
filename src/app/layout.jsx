import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Google Clone",
  description:
    "A clone of Google to make searching easier. An educational project to improve developing abilities.",
  icons: { icon: { url: "/favicon.svg", type: "image/svg" } },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="">
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
