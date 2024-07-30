import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Wassup? 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together</h1>
            <p className="subtitle max-w-[400px]">
              Feel free to reach out to me if you have any question or want to
              connect!
            </p>
            <div className="flex flex-col gap-y-4 xl:gap-y-10 mb-12 xl:mb-24 text-base xl:text-lg">
              <div className="flex items-center gap-x-8">
                <MailIcon size={18} className="text-primary" />
                <div>phammin5@msu.edu</div>
              </div>

              <div className="flex items-center gap-x-8">
                <HomeIcon size={18} className="text-primary" />
                <div>5000 Hagadorn Road, East Lansing, MI 48823</div>
              </div>

              <div className="flex items-center gap-x-8">
                <PhoneCall size={18} className="text-primary" />
                <div>+1 517 402 6152</div>
              </div>
            </div>
          </div>
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
