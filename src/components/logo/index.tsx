import logo_White from "@/assets/white-logo-1.png";
import logo_Dark from "@/assets/black-logo-1.png";
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
