/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { ChangeEventHandler, FormEvent, useState, useRef } from "react";

import emailJs from "@emailjs/browser";

import { Header } from "../components/Header";
import { Section } from "../components/Section";
import { Plus, WhatsappLogo, Envelope, LinkedinLogo } from "phosphor-react";

import { SpecificationProps } from "../types/accordion";
import { FormInputProps, InputTypes } from "../types/formInputProps";

import Card from "../components/Card";
import Accordion from "../components/Accordion";
import Carousel from "../components/Carousel";
import Form from "../components/Form";

const Home: NextPage = () => {
  const [contactInputFields, setContactInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const imageGames = [
    {
      url: "/assets/images/assassinsCreedSyndicate.png",
      label: "Assassin's Creed Syndicate",
    },
    {
      url: "/assets/images/battlefield2042.png",
      label: "Battlefield 2042",
    },
    {
      url: "/assets/images/dragonBallFighters.png",
      label: "Dragon ball Fighters",
    },
    {
      url: "/assets/images/fallGuys.png",
      label: "Fall Guys",
    },
    {
      url: "/assets/images/fortnite.png",
      label: "Fortnite",
    },
    {
      url: "/assets/images/forzaHorizon5.png",
      label: "Forza Horizon 5",
    },
    {
      url: "/assets/images/hitman.png",
      label: "Hitman 3",
    },
    {
      url: "/assets/images/minecraftDungeons.png",
      label: "minecraft Dungeons",
    },
    {
      url: "/assets/images/ori.png",
      label: "ori",
    },
    {
      url: "/assets/images/starWars.png",
      label: "Start Wars",
    },
  ];

  const videos = [
    {
      url: "https://streamable.com/e/lzluig?loop=0",
      title: "Forza Horizon 5",
    },
    {
      url: "https://streamable.com/e/9jhb96?loop=0",
      title: "fall Guys",
    },
    {
      url: "https://streamable.com/e/xcov99?loop=0",
      title: "Fortnite",
    },
    {
      url: "https://streamable.com/e/8wtqs7?loop=0",
      title: "Minecraft Dungeons",
    },
    {
      url: "https://streamable.com/e/acqkgc?loop=0",
      title: "Ori",
    },
    {
      url: "https://streamable.com/e/0fetil?loop=0",
      title: "Hitman",
    },
    {
      url: "https://streamable.com/e/nwlmgx?loop=0",
      title: "Dragon Ball fighters",
    },
    {
      url: "https://streamable.com/e/uqcnmt?loop=0",
      title: "The Crew 2",
    },
    {
      url: "https://streamable.com/e/visxr4?loop=0",
      title: "Battlefield 4",
    },
  ];

  const contactInputs: FormInputProps[] = [
    {
      label: "Nome",
      name: "name",
      type: InputTypes.text,
      value: contactInputFields.name,
      required: true,
      id: "name",
    },

    {
      label: "E-mail",
      name: "email",
      type: InputTypes.text,
      value: contactInputFields.email,
      required: true,
      id: "email",
    },

    {
      label: "Interesse",
      name: "message",
      type: InputTypes.textarea,
      value: contactInputFields.message,
      required: true,
      id: "message",
    },
  ];

  const handleContactSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const result = await emailJs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        event.target,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      );

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleContactInputChanges: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setContactInputs({
      ...contactInputFields,
      [event.target.name]: event.target.value,
    });
  };

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
                <p>1 Controle Sem Fio</p>
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
              <div className="flex flex-row gap-2 items-center justify-start w-min rounded-md p-4 bg-secondary text-white font-bold mt-8 mb-6 cursor-pointer">
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

          <Carousel images={imageGames} />
        </Section>

        <Section
          id="videos"
          className="w-full h-auto flex flex-row gap-8 flex-wrap align-top justify-center"
        >
          <h1 className="text-black font-header text-4xl w-full">Vídeos</h1>

          {videos.map((video) => {
            return (
              <div className="w-full lg:w-[400px]" key={video.title}>
                <h3 className="font-header texy-black my-4">{video.title}</h3>
                <div className="w-full h-0 relative pb-[56.250%]">
                  <iframe
                    src={video.url}
                    frameBorder="0"
                    allowFullScreen
                    className="w-full h-full absolute top-0 left-0 overflow-hidden"
                  ></iframe>
                </div>
              </div>
            );
          })}
        </Section>

        <Section
          id="contact"
          className="w-full h-auto flex flex-row gap-4 flex-wrap"
        >
          <h1 className="text-black font-header text-4xl w-full">Contatar</h1>

          <Form
            inputs={contactInputs}
            handleOnSubmit={handleContactSubmit}
            handleInputchanges={handleContactInputChanges}
          />

          <ul className="w-full flex flex-row align-center justify-center gap-8 mt-8">
            <li
              className="cursor-pointer hover:translate-y-[-3px] transition-all duration-[0.3s]"
              title="E-mail: victor470hugo@gmail.com"
            >
              <Link href="mailto:victor470hugo@gmail.com" target="_blank">
                <Envelope size={44} color="#d01111" weight="bold" />
              </Link>
            </li>
            <li
              className="cursor-pointer hover:translate-y-[-3px] transition-all duration-[0.3s]"
              title="Whatsapp: +55 (11) 93372-5857"
            >
              <Link
                href="https://api.whatsapp.com/send?phone=5511933725857"
                target="_blank"
              >
                <WhatsappLogo size={44} color="#47B100" weight="bold" />
              </Link>
            </li>
            <li
              className="cursor-pointer hover:translate-y-[-3px] transition-all duration-[0.3s]"
              title="LinkedIn: victorsilvadev"
            >
              <Link
                href="https://www.linkedin.com/in/victorsilvadev/"
                target="_blank"
              >
                <LinkedinLogo size={44} color="#11a9d0" weight="bold" />
              </Link>
            </li>
          </ul>
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
