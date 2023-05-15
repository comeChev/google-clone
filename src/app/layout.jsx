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
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
