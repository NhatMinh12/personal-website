import Image from "next/image";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Ken Pham",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+1 (517)402-6152",
  },
  {
    icon: <MailIcon size={20} />,
    text: "phammin5@msu.edu",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on Dec 16, 2004",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor's in Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "East Lansing, MI, USA",
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "JavaScript, Python",
      },
      {
        name: "Back-end Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Michigan State University",
        qualification: "Bachelor of Science",
        years: "2022 - 2026",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Athletic Injury and Rehabilitation Labs - MSU",
        qualification: "Software Developer",
        years: "May 2024 - Present",
      },
      {
        company: "Imagine Software Consultancy LLC",
        qualification: "Software Development Team Lead",
        years: "Sep 2023 - May 2024",
      },
      {
        company: "VinBigData",
        qualification: "Natural Language Processing Intern",
        years: "May 2023 - Aug 2023",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className = "w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger>
                <TabsTrigger className = "w-[162px] xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger className = "w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div>
                    <h3>Unmatched Service Quality for Over 10 Years</h3>
                    <p>I specialize in crafting intuitive websites with cutting-edge technology,, delivering dynamic and </p>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">qualifications info</TabsContent>
                <TabsContent value="skills">skills info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
