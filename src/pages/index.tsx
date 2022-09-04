import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Header } from "../components/Header";
import { Section } from "../components/Section";

import { Plus, WhatsappLogo } from "phosphor-react";

const Home: NextPage = () => {
  return (
    <>
      {/* Head configuration */}
      <Head>
        <title>Xbox Series S</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* header fixed */}
      <Header />

      {/* Content */}
      <main className="min-h-screen">
        <Section
          className="mt-20 flex flex-col-reverse gap-10 pr-0"
          id="initial"
        >
          {/* Informations */}
          <div className="w-full relative px-1">
            {/* Console Name */}
            <h1 className="text-black font-header text-6xl w-full">
              1 Console Xbox Series S
            </h1>

            {/* Technologies */}
            <ul className="mt-10">
              <li className="flex flex-row items-center justify-start gap-2 font">
                <Plus size={32} color="#47b100" weight="bold" />
                <p>Controle Sem Fio</p>
              </li>
              <li className="flex flex-row items-center justify-start gap-2">
                <Plus size={32} color="#47b100" weight="bold" />
                <p>Cabo HDMI Alta Velocidade</p>
              </li>
              <li className="flex flex-row items-center justify-start gap-2">
                <Plus size={32} color="#47b100" weight="bold" />
                <p>2 Pares de Pilhas Recarregáveis e Carregador</p>
              </li>
            </ul>

            {/* Negotiation Link */}
            <Link
              href="https://api.whatsapp.com/send?phone=5511933725857"
              target="_blank"
            >
              <div className="flex flex-row gap-2 items-center justify-start w-min rounded-md p-4 bg-secondary text-white font-bold mt-8 mb-6">
                <WhatsappLogo size={32} color="#f0f0f0" weight="regular" />
                <span>NEGOCIAR</span>
              </div>
            </Link>

            <span className="text-grey opacity-70">Falar com Victor</span>
          </div>

          {/* Xbox Series S Image */}
          <div className="w-full relative -top-5 right-0">
            <div className="w-full text-center relative top-20 z-50">
              <Image
                src="/assets/teste.png"
                alt="Console Xbox Series S"
                width={300}
                height={400}
              />
            </div>
            <div className="w-full h-3xl bg-white rounded-tl-3xl rounded-bl-3xl pb-5 pt-36 relative top-[-40px]">
              <h2 className="text-secondary font-header text-6xl w-full text-center">
                R$1950,00
              </h2>
              <p className="text-3xl mt-3 text-grey font-sans opacity-80 w-min relative left-[50%]">
                <del>R$2649,00</del>
              </p>
            </div>
          </div>
        </Section>
        <Section id="specifications">
          <h1 className="text-black font-header text-4xl w-full">
            Especificações
          </h1>
        </Section>
        <Section id="images">
          <h1 className="text-black font-header text-4xl w-full">Imagens</h1>
        </Section>
        <Section id="videos">
          <h1 className="text-black font-header text-4xl w-full">Vídeos</h1>
        </Section>
        <Section id="contact">
          <h1 className="text-black font-header text-4xl w-full">Contatar</h1>
        </Section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Home;
