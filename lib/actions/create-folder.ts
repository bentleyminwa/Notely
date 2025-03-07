"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const createFolderSchema = z.object({
  title: z
    .string()
    .min(3, "The title is too short!")
    .max(50, "This folder title is too long!"),
  description: z.string(),
  userId: z.string().cuid(),
});

export interface CreateFolderFormState {
  errors: {
    title?: string[];
    description?: string[];
    _form?: string[];
  };
}

export async function createFolder(
  prevState: CreateFolderFormState,
  formData: FormData
): Promise<CreateFolderFormState> {
  const session = await auth();

  if (!session) {
    return {
      errors: {
        _form: ["You must be signed in to create a folder."],
      },
    };
  }

  const result = createFolderSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    userId: session.user?.id,
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await db.folder.create({
      data: {
        slug: result.data.title,
        description: result.data.description,
        userId: result.data.userId,
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
  redirect("/folders");
}
