import {
  Button,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@/components/ui";
import Image from "next/image";

export default function FolderCreateForm() {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="group  border-2 border-dashed border-spacing-10 border-gray-300 p-7 flex flex-col gap-2 justify-center items-center cursor-pointer hover:border-green-500 transition duration-200 ease-in-out">
          <span>
            <Image
              src="/newfolder.png"
              alt="new folder"
              width={40}
              height={40}
              className="group-hover:scale-110 transition duration-200 ease-in-out"
            />
          </span>
          <span className="font-semibold tracking-wider">New Folder</span>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <form action="" className="p-3 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="title">Folder Title</Label>
            <Input id="title" name="title" placeholder="Journal" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Folder Description</Label>
            <Textarea
              id="description"
              name="descritpion"
              placeholder="My life's documentary"
            />
          </div>
          <Button type="submit">Create Folder</Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
