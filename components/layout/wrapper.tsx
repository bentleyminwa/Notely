import { db } from "@/lib/db";
import NoteCreateForm from "../notes/create-note-form";

export default async function Wrapper() {
  const folders = await db.folder.findMany();

  return <NoteCreateForm folders={folders} />;
}
