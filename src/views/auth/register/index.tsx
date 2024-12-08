import { useRouter } from "next/router";
import style from "./Register.module.scss";
import { useState } from "react";

function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const handlelogin = () => {
    router.push("/auth/login");
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      fullname: event.target.fullname.value,
      password: event.target.password.value,
    };

    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      event.target.reset();
      setLoading(false);
      router.push("/auth/login");
    } else {
      setLoading(false);
      setError(result.status === 400 ? "Email already exist" : "");
    }
  };

  return (
    <div className={style.container}>
      <div className="text-3xl mb-3">Register page</div>
      <div className={style.error}>{error}</div>
      <form onSubmit={handleSubmit} className={style.container}>
        <div className="flex flex-col mb-3">
          <label htmlFor="fullname" className="text-xl text-white mb-2">
            Fullname
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="masukan fullname"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="email" className="text-xl text-white mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="masukan email"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="password" className="text-xl text-white mb-2">
            password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="masukan password"
          />
        </div>
        <button type="submit" className="bg-white text-black px-10 mt-1" disabled={loading}>
          {loading ? "loading..." : "register"}
        </button>
      </form>
      <p
        onClick={handlelogin}
        style={{
          cursor: "pointer",
          fontSize: "15px",
          marginTop: "20px",
          color: "orange",
        }}
      >
        sudah punya akun? login disini!
      </p>
    </div>
  );
}

export default RegisterPage;
