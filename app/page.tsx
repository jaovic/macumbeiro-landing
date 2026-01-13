"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WhatsappFloating from "@/components/WhatsappFloating";
import RelatosCarousel from "@/components/RelatosCarousel";

export default function Home() {
	return (
		<main className="bg-black text-red-700">
			{/* HERO */}
			<section
				className="min-h-screen flex items-center px-6 relative bg-cover bg-center"
				style={{ backgroundImage: "url('/hero-bg.jpg')" }}
			>
				<div className="absolute inset-0 bg-black/60" />

				<div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
					<div className="flex justify-center md:justify-start">
						<Image
							src="/hero.jpg"
							alt="Bruxo Lira"
							width={260}
							height={260}
							className="rounded-full border-4 border-yellow-500 shadow-[0_0_60px_rgba(180,0,0,0.9)]"
						/>
					</div>

					<div className="text-center md:text-left">
						<h1 className="text-5xl font-extrabold text-yellow-500 mb-6">
							Bruxo Lira
						</h1>

						<p className="text-xl text-red-500 mb-6">
							Marcado antes do nascimento.
							<br />
							Forjado entre o altar e a encruzilhada.
						</p>

						<Button
							asChild
							className="bg-red-700 hover:bg-red-800 text-black font-bold px-10 py-6"
						>
							<a href="#manifesto">Conhecer a Caminhada</a>
						</Button>
					</div>
				</div>
			</section>

			{/* MANIFESTO / SOBRE */}
			<section
				id="manifesto"
				className="px-6 py-32 bg-gradient-to-b from-black via-red-950 to-black"
			>
				<div className="max-w-4xl mx-auto">
					<h2 className="text-4xl text-yellow-500 font-extrabold text-center mb-12">
						Manifesto • Sobre a Caminhada
					</h2>

					<div className="space-y-6 text-red-600 leading-relaxed text-lg">
						<p>
							Eu fui marcado antes do nascimento. Antes do meu primeiro choro,
							os espíritos já conheciam meu nome.
						</p>

						<p>
							Há quatro anos iniciei minha caminhada consciente na Umbanda, numa
							busca diária, assídua e silenciosa pelos mistérios do invisível.
							Atravessei casas, correntes e provas até firmar meus pés na Casa
							de Pai Oxalá, onde, há três anos, sirvo ao altar.
						</p>

						<p>
							Ali me foi confiado o atabaque — o coração vivo da gira — e desde
							o dia em que fui autorizado, sustento, com meu toque, os portais
							por onde os guias descem. Hoje, por essa força, mais de cem almas
							são acolhidas, curadas e realinhadas a cada sessão.
						</p>

						<p>
							Fui iniciado no Reiki pela linhagem de Mikao Usui, mas compreendi
							que aquela não era a raiz da minha alma. Minha raiz estava no
							sangue, nos mortos e nas encruzilhadas do tempo.
						</p>

						<p>
							Fui encontrado pela Quimbanda Luciferiana, recebi chaves, selos e
							outorgas. Ao perceber caminhos que não correspondiam à verdade do
							meu espírito, segui adiante.
						</p>

						<p>
							Me batizei na Quimbanda Ancestral, templo fr quimbanda Rei 7 da
							Lira, onde os Exus primordiais caminham, os mortos falam e a magia
							não se aprende — se desperta.
						</p>

						<p>
							Realizo atendimentos oraculares, feitiçarias, curas, abertura de
							caminhos, prosperidade, proteção, equilíbrio mental e
							reorganização do destino. Não opero por vaidade, mas por
							fundamento, pacto e autorização espiritual.
						</p>

						<p className="text-yellow-500 font-semibold">
							Minha força não vem apenas do que aprendi. Vem do que herdei.
						</p>

						<p>
							Na linhagem paterna, magistas, curadores e sacerdotes. Na materna,
							mulheres que rezam, sonham e veem além do tempo. Sou continuidade
							de um pacto antigo.
						</p>

						<p className="text-red-500 font-bold text-xl text-center pt-6">
							Não sigo este caminho.
							<br />
							Eu sou este caminho.
						</p>
					</div>
				</div>
			</section>

			{/* CATEGORIAS */}
			<section
				id="produtos"
				className="w-full py-24"
				style={{ backgroundImage: "url('/bg-textura.jpg')" }}
			>
				<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
					{[
						{
							href: "/produtos/oraculos",
							img: "/categorias/oraculos.jpg",
							title: "Oráculos",
							desc: "Leitura direta, sem rodeios ou ilusões.",
						},
						{
							href: "/produtos/magias",
							img: "/categorias/magias.jpg",
							title: "Magias",
							desc: "Feitiçaria com fundamento e consequência real.",
						},
						{
							href: "/produtos/farmacia",
							img: "/categorias/farmacia.jpg",
							title: "Farmácia Espiritual",
							desc: "Preparos feitos sob necessidade, não catálogo.",
						},
					].map((item) => (
						<Link key={item.title} href={item.href}>
							<Card className="bg-black border-red-900 hover:scale-105 transition cursor-pointer h-full min-h-[420px]">
								<Image
									src={item.img}
									alt={item.title}
									width={400}
									height={300}
									className="rounded-t-lg object-cover h-[220px] w-full"
								/>
								<CardContent className="p-6 text-center">
									<h3 className="text-2xl text-yellow-500 font-bold mb-3">
										{item.title}
									</h3>
									<p className="text-red-600 text-sm">{item.desc}</p>
								</CardContent>
							</Card>
						</Link>
					))}
				</div>
			</section>

			{/* RELATOS */}
			<section className="px-6 py-24 bg-red-950">
				<h2 className="text-4xl text-center text-yellow-500 font-bold mb-12">
					Relatos Reais
				</h2>

				<RelatosCarousel />
			</section>

			<footer className="text-center text-xs text-red-800 pb-6">
				Resultados variam conforme merecimento e fundamento espiritual.
			</footer>

			<WhatsappFloating />
		</main>
	);
}
