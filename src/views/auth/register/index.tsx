import { useRouter } from "next/router";
import style from "./Register.module.scss";

function RegisterPage() {
  const router = useRouter();
  const handlelogin = () => {
    router.push("/auth/login");
  };

  return (
    <div className={style.container}>
      <div className="text-3xl mb-3">Register page</div>
      <p onClick={handlelogin} style={{ cursor: "pointer", fontSize: "20px" }}>
        login disini!
      </p>
    </div>
  );
}

export default RegisterPage;
