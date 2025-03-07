"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return <div>From client: User is signed In!</div>;
  } else {
    return <div>From client: User is NOT signed in!</div>;
  }
}
