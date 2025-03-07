import Image from "next/image";

export const siteConfig = {
  metaInfo: {
    title: "Notely",
    description: "Note-taking application",
  },
  navItems: [
    {
      href: "/",
      label: "Home",
      icon: <Image src="/house.png" alt="house image" width={30} height={30} />,
    },
    {
      href: "/notes",
      label: "Notes",
      icon: <Image src="/notebook.png" alt="notebook" width={30} height={30} />,
    },
    {
      href: "/folders",
      label: "Folders",
      icon: <Image src="/folders.png" alt="folders" width={30} height={30} />,
    },
  ],
};
