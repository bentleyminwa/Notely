import { db } from "../db";

export function fetchRecentFolders() {
  return db.folder.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });
}

export function fetchAllFolders() {
  return db.folder.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export function fetchRecentNotes() {
  return db.note.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });
}

export function fetchAllNotes() {
  return db.note.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}
