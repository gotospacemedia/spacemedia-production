import logo_White from "@/assets/Space-Logo-Light.png";
import logo_Dark from "@/assets/Space-Logo-Dark.png";
import Image from "next/image";

const Logo = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const logo = variant === "dark" ? logo_Dark : logo_White;
  return (
    <div>
      <Image src={logo} alt="logo" className="w-[110px] md:w-[120px]" />
    </div>
  );
};

export default Logo;
