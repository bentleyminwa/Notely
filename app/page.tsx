import FolderCreateForm from "@/components/folders/create-folder-form";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-5">Recent Folders</h1>
      <FolderCreateForm />
    </div>
  );
}
