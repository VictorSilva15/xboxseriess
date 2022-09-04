import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Header } from "../components/Header";
import { Section } from "../components/Section";
import { Plus, WhatsappLogo } from "phosphor-react";

import { SpecificationProps } from "../types/accordion";

import Card from "../components/Card";
import Accordion from "../components/Accordion";

const Home: NextPage = () => {
  const specifications: SpecificationProps[] = [
    // Processador
    {
      title: "Processador",
      children: (
        <div className="flex flex-col items-start justify-start gap-6">
          <Card
            title="CPU."
            description="CPU Zen 2 personalizada de 8X Cores @ 3,6 GHz (3,4 GHz com SMT)."
          />
          <Card title="SOC Die Size." description="197,05 mm²." />
          <Card
            title="GPU."
            description="GPU RDNA 2 personalizado de 4 TFLOPS, 20 CUs @1.565 GHz."
          />
        </div>
      ),
    },
    // Memória e Armazenamento
    {
      title: "Memória e Armazenamento",
      children: (
        <div className="flex flex-col items-start justify-start gap-6">
          <Card
            title="Memória."
            description="GDDR6 de 10 GB e barramento de 128 bits."
          />
          <Card
            title="Taxa de transferência de E/S."
            description="2,4 GB/s (Raw), 4,8 GB/s (compactado, com bloco de descompressão de hardware personalizado)."
          />
          <Card
            title="Largura de banda de memória."
            description="8GB a 224 GB/s, 2GB a 56 GB/s."
          />
          <Card
            title="Armazenamento expansível."
            description="O suporte para o cartão de expansão Seagate de 1 TB para Xbox Series X|S corresponde exatamente ao armazenamento interno (vendido separadamente). Suporte para HDD externo USB 3.1 (vendido separadamente)."
          />
          <Card
            title="Largura de banda de memória."
            description="8GB a 224 GB/s, 2GB a 56 GB/s."
          />

          <Card
            title="Armazenamento interno."
            description="SSD NVME personalizado de 512 GB."
          />
        </div>
      ),
    },
    // Recursos de Vídeo
    {
      title: "Recursos de Vídeo",
      children: (
        <div className="flex flex-col items-start justify-start gap-6">
          <Card title="Resolução de jogos." description="1440p." />
          <Card
            title="Recursos HDMI."
            description="Modo automático de baixa latência. Taxa de atualização variável HDMI. AMD FreeSync."
          />
          <Card title="Meta de desempenho." description="Até 120 FPS." />
        </div>
      ),
    },
    // Capacidade de Som
    {
      title: "Capacidades de Som",
      children: (
        <div className="flex flex-col items-start justify-start gap-6">
          <ul className="list-disc ml-6 py-4 text-md font-serif">
            <li>L-PCM, até 7.1</li>
            <li>DTS 5.1</li>
            <li>Dolby Digital 5.1</li>
            <li>Dolby TrueHD com Atmos</li>
          </ul>
        </div>
      ),
    },
    // Portas e Conectividade
    {
      title: "Portas e Conectividade",
      children: (
        <div className="flex flex-col items-start justify-start gap-6">
          <Card title="HDMI." description="porta HDMI 2.1." />
          <Card title="Ethernet." description="802.3 10/100/1000." />
          <Card title="USB." description="portas USB 3.1 Gen 1." />
          <Card
            title="Opções de acessórios."
            description="Rádio sem fio Xbox de banda dupla dedicado."
          />
          <Card title="Sem fio." description="anda dupla 802.11ac." />
        </div>
      ),
    },
    // Design
    {
      title: "Design",
      children: (
        <div className="flex flex-col items-start justify-start gap-6">
          <Image
            src="/assets/images/xboxseriess-lying.png"
            alt="Xbox Series S Dimensions frame"
            width={400}
            height={180}
          />
          <Card title="Dimensões." description="6,5 cm x 15,1 cm x 27,5cm" />
          <Card title="Peso." description="1,93 kg" />
        </div>
      ),
    },
  ];

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
                src="/assets/images/xboxseriess.png"
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

        <Section id="specifications" className="flex flex-col gap-8 relative">
          {/* Title and design */}
          <div className="h-min">
            <h1 className="text-black font-header text-4xl w-full">
              Especificações
            </h1>
            <div className="relative -left-10">
              <Image
                src="/assets/images/xboxseriess-half-controller.png"
                alt="Xbox Series S Controller"
                width={380}
                height={320}
              />
            </div>
          </div>
          {/* Specifications */}
          <div className="h-min">
            <Accordion items={specifications} />
          </div>
        </Section>

        <Section id="images">
          <h1 className="text-black font-header text-4xl w-full mb-5">
            Imagens
          </h1>
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
