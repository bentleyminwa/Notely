import { db } from "../db";

export function fetchRecentFolders() {
  return db.folder.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });
}
