import {
  Button,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@/components/ui";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function FolderCreateForm() {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="border-2 border-dashed border-spacing-10 border-gray-300 p-7 flex flex-col gap-2 justify-center items-center cursor-pointer hover:border-green-500 transition duration-200 ease-in-out">
          <span>
            <PencilSquareIcon width={30} />
          </span>
          <span className="text-sm font-semibold">New Note</span>
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
