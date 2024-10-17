import Link from "next/link";
import style from "./Login.module.css";

function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[200px] bg-gray-100">
      <div className="text-3xl">Login page</div>
      <Link href="/auth/register" className={style.boxLogin}>
        register disini!
      </Link>
    </div>
  );
}

export default LoginPage;
