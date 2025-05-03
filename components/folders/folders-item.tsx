import type { Folder } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui";

interface FolderItemProps {
  folder: Folder;
}

export default function FolderItem({ folder }: FolderItemProps) {
  const date = folder.createdAt;
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);

  return (
    <div className="border border-gray-400 rounded-3xl p-5 space-y-4 bg-green-200 group hover:shadow">
      <div className="flex items-center justify-between">
        <Image src="/folder.png" alt="folder" width={50} height={50} />
        <div>
          <Popover>
            <PopoverTrigger>
              <Image
                src="/ellipsis.png"
                alt="ellipsis"
                width={30}
                height={30}
              />
            </PopoverTrigger>
            <PopoverContent
              side="top"
              align="start"
              className="w-[150px] border-gray-400 flex flex-col gap-4"
            >
              <form>
                <Button type="submit">Edit Folder</Button>
              </form>
              <form>
                <Button type="submit" className="bg-red-500">
                  Delete Folder
                </Button>
              </form>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <Link
        href={`/folders/${folder.slug}`}
        className="text-xl font-semibold tracking-wide capitalize group-hover:border-b"
      >
        {folder.slug}
      </Link>
      <small className="text-gray-700 block">{formattedDate}</small>
    </div>
  );
}
