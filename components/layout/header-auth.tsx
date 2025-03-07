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
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function HeaderAuth() {
  const { data, status } = useSession();

  let content;

  if (status === "loading") {
    content = null;
  }

  if (data?.user) {
    content = (
      <div className="flex items-center gap-3">
        <h3 className="tracking-wide">{data.user.name}</h3>
        <Popover>
          <PopoverTrigger>
            <Avatar className="w-[40px] h-[40px] cursor-pointer">
              <AvatarImage src={data.user.image || ""} />
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <form action={actions.signOut}>
              <Button type="submit">
                <span>
                  <Image
                    src="/closeddoor.png"
                    alt="open door"
                    width={30}
                    height={30}
                  />
                </span>

                <span>Log Out</span>
              </Button>
            </form>
          </PopoverContent>
        </Popover>
      </div>
    );
  } else {
    content = (
      <form action={actions.signIn}>
        <Button
          type="submit"
          className="cursor-pointer flex items-center gap-2"
        >
          <span>
            <Image
              src="/opendoor.png"
              alt="open door"
              width={30}
              height={30}
              className="my-2"
            />
          </span>

          <span>Log In</span>
        </Button>
      </form>
    );
  }

  return <div>{content}</div>;
}
