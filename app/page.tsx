"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <Otherhome />
    </SessionProvider>
  );
}

 function Otherhome () {
      const session = useSession();
  return (
    <div>
      { session.status === "authenticated" && <button onClick={ () => signOut()}>Sign out</button>}
      { session.status === "unauthenticated" && <button onClick={ () => signIn()}>Sign in</button>}
    </div>
  )
}