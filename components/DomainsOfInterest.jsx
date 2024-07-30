import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const domOfInterestData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Natural Language Processing",
    description: "Applying NLP techniques to extract meaningful insights from textual data, enhancing capabilities in areas like sentiment analysis, information retrieval, and language translation",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web/Mobile App Development",
    description: "Designing and developing robust web and mobile applications using modern frameworks and technologies, ensuring seamless user experiences and high performance.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Sports Analytics",
    description: "Utilizing statistical methods and data analysis to evaluate and improve sports performance, with a focus on providing insights for coaches, athletes, and sports organizations.",
  },
];

const DomainsOfInterest = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-20 xl:mb-24 text-center mx-auto">
          My Domains of Interest
        </h2>

        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {domOfInterestData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>

                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DomainsOfInterest;
