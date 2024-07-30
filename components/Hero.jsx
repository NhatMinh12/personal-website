import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import DevImg from "./DevImg";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Aspiring Software Engineer / Sports Enthusiast
            </div>
            <h1 className="h1 mb-4">This is Ken Pham</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
            Discover my journey, skills, and passions in web development and software engineering.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Link
                passHref
                legacyBehavior
                href="https://drive.google.com/file/d/1vUVUrq3N86KPnr66dLLBjPxDsTX4aq1k/view?usp=drive_link"
              >
                <a target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="gap-x-2">
                    Resume <Download size={18} />
                  </Button>
                </a>
              </Link>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <div className="bg-hero_shape2_blue_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/profile_pic1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
