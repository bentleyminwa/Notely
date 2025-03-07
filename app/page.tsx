import Profile from "@/components/profile";
import { Button } from "@/components/ui/button";
import * as actions from "@/lib/actions";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <form action={actions.signIn}>
        <Button type="submit">Sign In</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">Sign Out</Button>
      </form>
      <Profile />
    </div>
  );
}
