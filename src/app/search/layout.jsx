import "@/app/globals.css";
import SearchHeader from "@/components/SearchHeader";

export const metadata = {
  title: "Google Clone",
  description:
    "A clone of Google to make searching easier. An educational project to improve developing abilities.",
  icons: { icon: { url: "/favicon.svg", type: "image/svg" } },
};

export default function SearchLayout({ children }) {
  return (
    <html lang="it">
      <body className="">
        <SearchHeader />
        {children}
      </body>
    </html>
  );
}
