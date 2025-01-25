import logo_White from "@/assets/Space-Logo-Light.png";
import logo_Dark from "@/assets/Space-Logo-Dark.png";
import Image from "next/image";

const Logo = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const logo = variant === "dark" ? logo_Dark : logo_White;
  return (
    <div>
      <Image src={logo} alt="logo" className="w-[130px] md:w-[150px]" />
    </div>
  );
};

export default Logo;
