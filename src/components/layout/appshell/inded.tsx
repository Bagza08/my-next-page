import Navbar from "@/components/navbar";

type Props = {
  children: React.ReactNode;
};

function LayoutApp(props: Props) {
  const { children } = props;

  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}

export default LayoutApp;
