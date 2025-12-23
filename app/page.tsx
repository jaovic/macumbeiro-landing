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
			<section className="min-h-screen flex items-center px-6">
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
					{/* FOTO */}
					<div className="flex justify-center md:justify-start">
						<Image
							src="/hero.jpg"
							alt="Bruxo Lira"
							width={260}
							height={260}
							className="rounded-full border-4 border-yellow-500 shadow-[0_0_60px_rgba(180,0,0,0.9)]"
						/>
					</div>

					{/* TEXTO */}
					<div className="text-center md:text-left">
						<h1 className="text-5xl font-extrabold text-yellow-500 mb-6">
							Bruxo Lira
						</h1>

						<p className="text-lg text-red-500 leading-relaxed mb-6">
							Trabalhos espirituais feitos com fundamento, sigilo absoluto e
							responsabilidade. Nada de promessas vazias ou rituais genéricos.
						</p>

						<p className="text-red-600 leading-relaxed mb-8">
							Atuo há mais de <strong>3 anos</strong> ajudando pessoas a
							enxergar caminhos, cortar demandas espirituais, destravar áreas da
							vida e tomar decisões com clareza.
							<br />
							<br />
							Atendimento direto comigo. Sem intermediários. Sem teatro. Somente
							aquilo que realmente pode e deve ser feito no seu caso.
						</p>

						<Button
							asChild
							className="bg-red-700 hover:bg-red-800 text-black font-bold px-10 py-6"
						>
							<a href="#produtos">Conhecer os Trabalhos</a>
						</Button>
					</div>
				</div>
			</section>

			{/* CATEGORIAS */}
			<section
				id="produtos"
				className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-8"
			>
				<Link href="/produtos/oraculos">
					<Card className="bg-black border-red-900 hover:scale-105 transition cursor-pointer h-full min-h-[420px] flex flex-col">
						<Image
							src="/categorias/oraculos.jpg"
							alt="Oráculos"
							width={400}
							height={300}
							className="rounded-t-lg object-cover h-[220px] w-full"
						/>
						<CardContent className="p-6 text-center flex-1 flex flex-col justify-between">
							<div>
								<h3 className="text-2xl text-yellow-500 font-bold mb-3">
									Oráculos
								</h3>
								<p className="text-red-600 text-sm">
									Leituras espirituais diretas, sem rodeios, focadas na verdade
									do seu momento atual.
								</p>
							</div>
						</CardContent>
					</Card>
				</Link>

				<Link href="/produtos/magias">
					<Card className="bg-black border-red-900 hover:scale-105 transition cursor-pointer h-full min-h-[420px] flex flex-col">
						<Image
							src="/categorias/magias.jpg"
							alt="Magias"
							width={400}
							height={300}
							className="rounded-t-lg object-cover h-[220px] w-full"
						/>
						<CardContent className="p-6 text-center flex-1 flex flex-col justify-between">
							<div>
								<h3 className="text-2xl text-yellow-500 font-bold mb-3">
									Magias
								</h3>
								<p className="text-red-600 text-sm">
									Trabalhos energéticos sérios para limpeza, abertura de
									caminhos e proteção espiritual.
								</p>
							</div>
						</CardContent>
					</Card>
				</Link>

				<Link href="/produtos/farmacia">
					<Card className="bg-black border-red-900 hover:scale-105 transition cursor-pointer h-full min-h-[420px] flex flex-col">
						<Image
							src="/categorias/farmacia.jpg"
							alt="Farmácia Espiritual"
							width={400}
							height={300}
							className="rounded-t-lg object-cover h-[220px] w-full"
						/>
						<CardContent className="p-6 text-center flex-1 flex flex-col justify-between">
							<div>
								<h3 className="text-2xl text-yellow-500 font-bold mb-3">
									Farmácia Espiritual
								</h3>
								<p className="text-red-600 text-sm">
									Preparos espirituais específicos, feitos conforme a
									necessidade de cada pessoa.
								</p>
							</div>
						</CardContent>
					</Card>
				</Link>
			</section>

			{/* RELATOS */}
			<section className="px-6 py-24 bg-red-950">
				<h2 className="text-4xl text-center text-yellow-500 font-bold mb-12">
					Relatos Reais de Clientes
				</h2>

				<RelatosCarousel />

				<div className="text-center mt-14">
					<Button
						asChild
						className="bg-red-700 hover:bg-red-800 text-black font-bold px-10 py-6"
					>
						<Link href="/relatos">Ver todos os relatos</Link>
					</Button>
				</div>
			</section>

			{/* CONTATO FINAL */}
			<section className="px-6 py-28 text-center">
				<h2 className="text-4xl font-bold text-yellow-500 mb-6">
					Atendimento Direto e Sigiloso
				</h2>
				<p className="text-red-600 mb-10 max-w-xl mx-auto">
					Cada caso é único. Se você sente que algo está travado, confuso ou
					pesado, o primeiro passo é conversar.
				</p>

				<Button
					asChild
					className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-black font-extrabold px-12 py-8 text-xl shadow-[0_0_45px_rgba(0,255,0,0.9)]"
				>
					<a href="https://wa.me/5599999999999" target="_blank">
						Iniciar Atendimento
					</a>
				</Button>
			</section>

			<footer className="text-center text-xs text-red-800 pb-6">
				Resultados variam conforme fé, merecimento e situação espiritual.
			</footer>

			<WhatsappFloating />
		</main>
	);
}
