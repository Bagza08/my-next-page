import Link from "next/link";
import React from "react";

function Login() {
  return (
    <>
      <div>Login page</div>
      <Link href="/auth/register">register disini!</Link>
    </>
  );
}

export default Login;
