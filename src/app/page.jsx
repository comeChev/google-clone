import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import autoprefixer from "autoprefixer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />
      {/* Body */}
      <div className="flex flex-col items-center mt-24 min-h-48">
        <Image
          width={300}
          height={200}
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          className="select-none h-auto"
          alt="Google Logo"
          priority={true}
        />
        <HomeSearch />
      </div>
    </>
  );
}
