import FolderList from "@/components/folders/folders-list";
import { fetchAllFolders } from "@/lib/queries";

export default function FoldersPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold">Your Folders</h1>
      <section className="mt-5">
        <FolderList fetchData={fetchAllFolders} />
      </section>
    </section>
  );
}
