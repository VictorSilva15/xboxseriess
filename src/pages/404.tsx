import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const errorPage: NextPage = () => {
  return (
    <main className="w-screen h-screen flex items-center justify-center gap-4 flex-col">
      <h1 className="text-6xl font-header">
        Error <span className="text-primary">404</span>
      </h1>
      <p className="text-lg font-sans text-black">Página não encontrada</p>

      <Link href="/">
        <div className="p-4 rounded-md bg-secondary w-54 mt-8 text-white-default font-bold shadow-slate-800">
          Voltar à página inicial
        </div>
      </Link>

      <div className="opacity-10 fixed top-50 left-50 -z-10">
        <Image
          src="/assets/images/xboxseriess-controller2.png"
          alt="Xbox Series S Controller"
          width={440}
          height={400}
        />
      </div>
    </main>
  );
};

export default errorPage;
