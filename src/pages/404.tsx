import Head from "next/head";
import Image from "next/image";

function Page404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <Head>
        <title>Page Not Found</title>
      </Head>
      <Image
        src="https://media.istockphoto.com/id/1156845283/vector/flat-cartoon-character.jpg?s=612x612&w=0&k=20&c=F7hqR6qUdssv1IXZm9g7K73dc__SfdsoYkqIduHSxrI=" // URL gambar dari Google
        alt="Google Logo"
        width={600} // Set lebar gambar
        height={250} // Set tinggi gambar
      />
    </div>
  );
}

export default Page404;
