import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function Navbar() {
  const { data }: any = useSession();

  console.log(data);

  return (
    <div className="navbar">
      <p>navbar</p>
      {data ? <p>selamat datang! {data?.user?.fullname}</p> : null}
      {data ? (
        <button onClick={() => signOut()}>sign out</button>
      ) : (
        <button onClick={() => signIn()}>sign in</button>
      )}
    </div>
  );
}

export default Navbar;
