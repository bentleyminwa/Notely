import type { Folder } from "@prisma/client";
import Image from "next/image";

interface FolderListProps {
  fetchData: () => Promise<Folder[]>;
}

export default async function FolderList({ fetchData }: FolderListProps) {
  const folders = await fetchData();

  if (!folders) return <div>No folders have been added</div>;

  return (
    <section className="grid grid-cols-3 gap-4">
      {folders.map((folder) => {
        const date = folder.createdAt;
        const formattedDate = new Intl.DateTimeFormat("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }).format(date);

        return (
          <div
            key={folder.id}
            className="border border-gray-400 rounded-3xl p-5 space-y-4 bg-green-200"
          >
            <div className="flex items-center justify-between">
              <Image src="/folder.png" alt="folder" width={50} height={50} />
              <Image
                src="/ellipsis.png"
                alt="ellipsis"
                width={30}
                height={30}
              />
            </div>
            <h3 className="text-xl font-semibold tracking-wide capitalize">
              {folder.slug}
            </h3>
            <small className="text-gray-700">{formattedDate}</small>
          </div>
        );
      })}
    </section>
  );
}
