import type { Note } from "@prisma/client";
import NoteItem from "./note-item";

interface NotesListProps {
  fetchData: () => Promise<Note[]>;
}

export default async function NotesList({ fetchData }: NotesListProps) {
  const notes = await fetchData();

  if (!notes) return <div>No notes have been created...</div>;

  return (
    <section className="grid grid-cols-3 gap-4">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </section>
  );
}
