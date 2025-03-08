import NotesList from "@/components/notes/notes-list";
import { fetchAllNotes } from "@/lib/queries";

export default function NotesPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold">Your Notes</h1>
      <section className="mt-5">
        <NotesList fetchData={fetchAllNotes} />
      </section>
    </section>
  );
}
