import Navbar from "@/components/navbar";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

function LayoutApp(props: Props) {
  const { children } = props;
  const route = useRouter();

  const disableNavbar = ["/auth/login", "/auth/register", "/404"];

  return (
    <main>
      {!disableNavbar.includes(route.pathname) && <Navbar />}
      {children}
    </main>
  );
}

export default LayoutApp;
