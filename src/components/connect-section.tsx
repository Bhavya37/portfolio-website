import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { GeeksforGeeksIcon } from "./icons/geeksforgeeks";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bhavya-singh-594a90325/",
    icon: <Linkedin className="h-10 w-10" />,
  },
  {
    name: "Twitter",
    url: "https://x.com/BhavyaSing033",
    icon: <Twitter className="h-10 w-10" />,
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/user/bhavya03/",
    icon: <GeeksforGeeksIcon className="h-10 w-10" />,
  },
];

const ConnectSection = () => {
  return (
    <section id="connect" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container text-center px-4 md:px-6">
        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl mb-12 text-primary">
          Connect With Me
        </h2>
        <div className="flex justify-center gap-6 md:gap-10">
          {socialLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 transition-all duration-300 hover:text-primary hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-12 duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
              aria-label={`Connect with me on ${link.name}`}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
