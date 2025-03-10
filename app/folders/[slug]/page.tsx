import NotesList from "@/components/notes/notes-list";
import { fetchNotesByFolderSlug } from "@/lib/queries";

interface FolderPageProps {
  params: {
    slug: string;
  };
}

export default function FolderPage({ params }: FolderPageProps) {
  const { slug } = params;

  const decodedSlug = decodeURIComponent(slug);

  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-wide">{decodedSlug}</h1>
      <section className="mt-5">
        <NotesList fetchData={() => fetchNotesByFolderSlug(decodedSlug)} />
      </section>
    </section>
  );
}
