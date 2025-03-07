"use client";

import {
  Avatar,
  AvatarImage,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui";
import * as actions from "@/lib/actions";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";

export default function HeaderAuth() {
  const { data, status } = useSession();

  let content;

  if (status === "loading") {
    content = null;
  }

  if (data?.user) {
    content = (
      <div className="flex items-center gap-3">
        <h3>{data.user.name}</h3>
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage src={data.user.image || ""} />
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <form action={actions.signOut}>
              <Button type="submit">
                <span>
                  <ArrowRightStartOnRectangleIcon />
                </span>
                <span>Logout</span>
              </Button>
            </form>
          </PopoverContent>
        </Popover>
      </div>
    );
  } else {
    content = (
      <form action={actions.signIn}>
        <Button type="submit" className="cursor-pointer">
          Log In
        </Button>
      </form>
    );
  }

  return <div>{content}</div>;
}
