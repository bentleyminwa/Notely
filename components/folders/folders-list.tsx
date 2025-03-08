import type { Folder } from "@prisma/client";
import FolderItem from "./folders-item";

interface FolderListProps {
  fetchData: () => Promise<Folder[]>;
}

export default async function FolderList({ fetchData }: FolderListProps) {
  const folders = await fetchData();

  if (!folders) return <div>No folders have been added</div>;

  return (
    <section className="grid grid-cols-3 gap-4">
      {folders.map((folder) => (
        <FolderItem key={folder.id} folder={folder} />
      ))}
    </section>
  );
}
