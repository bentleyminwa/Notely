import { Separator } from "@/components/ui";
import type { Note } from "@prisma/client";
import Image from "next/image";

interface NoteItemProps {
  note: Note;
}

export default function NoteItem({ note }: NoteItemProps) {
  const date = note.createdAt;

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);

  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const day = date.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="border border-gray-400 rounded-3xl p-4 bg-red-200">
      <small className="block text-gray-600">{formattedDate}</small>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{note.title}</h3>
        <Image src="/menu1.png" alt="ellipsis" width={25} height={25} />
      </div>
      <Separator className="my-3" />
      <div>
        <p className="min-h-[150px] text-gray-800">{note.content}</p>
        <div className="flex items-center gap-3">
          <Image src="/clock.png" alt="clock" width={20} height={20} />
          <small className="text-gray-600">
            {time}, {day}
          </small>
        </div>
      </div>
    </div>
  );
}
