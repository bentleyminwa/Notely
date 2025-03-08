"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const createNoteSchema = z.object({
  title: z.string().min(3, "The title is too short!"),
  content: z.string().min(3, "The content is too short!"),
  userId: z.string().cuid(),
  folderId: z.string().nonempty("Please select a folder"),
});

export interface CreateNoteFormState {
  errors: {
    title?: string[];
    content?: string[];
    folderId?: string[];
    _form?: string[];
  };
}

export async function createNote(
  prevState: CreateNoteFormState,
  formData: FormData
): Promise<CreateNoteFormState> {
  const session = await auth();

  if (!session) {
    return {
      errors: {
        _form: ["You must be signed in to create a note."],
      },
    };
  }

  const result = createNoteSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    userId: session.user?.id,
    folderId: formData.get("folderId"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await db.note.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: result.data.userId,
        folderId: result.data.folderId,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong!"],
        },
      };
    }
  }

  revalidatePath("/");
  redirect("/notes");
}
