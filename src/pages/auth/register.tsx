import { useRouter } from "next/router";

function Register() {
  const router = useRouter();
  const handlelogin = () => {
    router.push("/auth/login");
  };

  return (
    <>
      <div>Register page</div>
      <p onClick={handlelogin}>login disini!</p>
    </>
  );
}

export default Register;
