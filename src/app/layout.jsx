import Footer from "@/components/Footer";
import "./globals.css";
import ProviderTheme from "@/providers/ProviderTheme";

export const metadata = {
  title: "Google Clone",
  description:
    "A clone of Google to make searching easier. An educational project to improve developing abilities.",
  icons: { icon: { url: "/favicon.svg", type: "image/svg" } },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProviderTheme>
          <div className="relative min-h-screen dark:text-gray-300 dark:bg-gray-800">
            {children}
            {/* Footer */}
            <Footer />
          </div>
        </ProviderTheme>
      </body>
    </html>
  );
}
