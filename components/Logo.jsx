import Link from "next/link";
import { RiHome2Line } from "react-icons/ri";

const Logo = () => {
  return (
    <Link href="/" className="text-foreground text-[22px] hover:text-primary transition-all">
      <RiHome2Line size={54}/>
    </Link>
  );
};

export default Logo;
