"use client";

import {
  Button,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@/components/ui";
import * as actions from "@/lib/actions";
import Image from "next/image";
import { useActionState } from "react";

export default function FolderCreateForm() {
  const [state, formAction, pending] = useActionState(actions.createFolder, {
    errors: {},
  });

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
        <form action={formAction} className="p-3 space-y-5">
          {state?.errors._form && (
            <p
              aria-live="polite"
              className="border border-red-300 bg-red-200 text-sm p-2"
            >
              {state.errors?._form}
            </p>
          )}
          <div className="space-y-2">
            <Label htmlFor="title">Folder Title</Label>
            <Input id="title" name="title" placeholder="Journal" />
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
            <Label htmlFor="description">Folder Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="My life's documentary"
            />
            {state?.errors.description && (
              <p aria-live="polite">{state.errors?.description}</p>
            )}
          </div>
          <Button type="submit" disabled={pending}>
            Create Folder
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
