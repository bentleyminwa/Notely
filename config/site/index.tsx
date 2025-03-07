import {
  ClipboardDocumentListIcon,
  FolderIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

export const siteConfig = {
  metaInfo: {
    title: "Notely",
    description: "Note-taking application",
  },
  navItems: [
    {
      href: "/",
      label: "Home",
      icon: <HomeIcon width={30} />,
    },
    {
      href: "/notes",
      label: "Notes",
      icon: <ClipboardDocumentListIcon width={30} />,
    },
    {
      href: "/folders",
      label: "Folders",
      icon: <FolderIcon width={30} />,
    },
  ],
};
