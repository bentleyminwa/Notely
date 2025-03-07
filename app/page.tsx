import FolderCreateForm from "@/components/folders/create-folder-form";
import FolderList from "@/components/folders/folders-list";
import { fetchRecentFolders } from "@/lib/queries";

export default function Home() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-5">Recent Folders</h1>
      <section className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <FolderList fetchData={fetchRecentFolders} />
        </div>
        <div className="col-span-1">
          <FolderCreateForm />
        </div>
      </section>
    </section>
  );
}
