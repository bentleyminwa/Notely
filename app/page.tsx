import FolderCreateForm from "@/components/folders/create-folder-form";
import FolderList from "@/components/folders/folders-list";
import Wrapper from "@/components/layout/wrapper";
import NotesList from "@/components/notes/notes-list";
import { fetchRecentFolders, fetchRecentNotes } from "@/lib/queries";

export default async function Home() {
  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-2xl font-semibold mb-5">Recent Folders</h1>
      <section className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <FolderList fetchData={fetchRecentFolders} />
        </div>
        <div className="col-span-1 place-content-center">
          <FolderCreateForm />
        </div>
      </section>
      <h1 className="text-2xl font-semibold mb-5">My Notes</h1>
      <section className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <NotesList fetchData={fetchRecentNotes} />
        </div>
        <div className="col-span-1 place-content-center">
          <Wrapper />
        </div>
      </section>
    </section>
  );
}
