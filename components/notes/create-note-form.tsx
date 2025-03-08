"use client";

import {
  Button,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@/components/ui";
import * as actions from "@/lib/actions";
import type { Folder } from "@prisma/client";
import Image from "next/image";
import { useActionState } from "react";

interface NoteCreateFormProps {
  folders: Folder[];
}

export default function NoteCreateForm({ folders }: NoteCreateFormProps) {
  const [state, formAction, pending] = useActionState(actions.createNote, {
    errors: {},
  });

  return (
    <Popover>
      <PopoverTrigger>
        <div className="group  border-2 border-dashed border-spacing-10 border-gray-300 p-7 flex flex-col gap-2 justify-center items-center cursor-pointer hover:border-green-500 transition duration-200 ease-in-out">
          <span>
            <Image
              src="/pencil.png"
              alt="pencil"
              width={40}
              height={40}
              className="group-hover:scale-110 transition duration-200 ease-in-out"
            />
          </span>
          <span className="font-semibold tracking-wider">New Note</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[500px] mr-10" side="left" align="end">
        <form action={formAction} className="p-3 space-y-5">
          {state?.errors._form && (
            <p
              aria-live="polite"
              className="border border-red-300 bg-red-200 text-sm p-2"
            >
              {state.errors?._form}
            </p>
          )}
          <div>
            <Select name="folderId">
              <SelectTrigger>
                <SelectValue placeholder="Choose a Folder" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Folders</SelectLabel>
                  {folders.map((folder) => (
                    <SelectItem key={folder.id} value={folder.id}>
                      {folder.slug}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {state?.errors.folderId && (
              <p
                aria-live="polite"
                className="text-sm text-red-400 tracking-wide"
              >
                {state.errors?.folderId}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Note Title</Label>
            <Input id="title" name="title" placeholder="Entry 001" />
            {state?.errors.title && (
              <p
                aria-live="polite"
                className="text-sm text-red-400 tracking-wide"
              >
                {state.errors?.title}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Note Content</Label>
            <Textarea
              id="content"
              name="content"
              placeholder="Yesterday was a great day..."
              className="min-h-[200px]"
            />
            {state?.errors.content && (
              <p
                aria-live="polite"
                className="text-sm text-red-400 tracking-wide"
              >
                {state.errors?.content}
              </p>
            )}
          </div>
          <Button type="submit" disabled={pending}>
            Create Note
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
