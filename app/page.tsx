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
			{/* HEADER */}
			<header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-red-900">
				<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
					<Link href="/" className="text-yellow-500 font-extrabold text-lg">
						Bruxo Lira
					</Link>

					<nav className="flex gap-6 text-sm">
						<Link
							href="/manifesto"
							className="text-red-500 hover:text-yellow-500 transition"
						>
							Manifesto
						</Link>
					</nav>
				</div>
			</header>

			{/* HERO */}
			<section
				className="min-h-screen flex items-center px-6 relative bg-cover bg-center pt-24"
				style={{ backgroundImage: "url('/hero-bg.jpg')" }}
			>
				<div className="absolute inset-0 bg-black/50" />

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

						<p className="text-lg text-red-500 leading-relaxed mb-6">
							Trabalhos espirituais feitos com fundamento, sigilo absoluto e
							responsabilidade. Nada de promessas vazias ou rituais genéricos.
						</p>

						<p className="text-red-600 leading-relaxed mb-8">
							Atendimento direto comigo. Sem intermediários. Sem teatro.
							<br />
							Somente aquilo que realmente pode e deve ser feito no seu caso.
						</p>

						<Button
							asChild
							className="bg-red-700 hover:bg-red-800 text-black font-bold px-10 py-6"
						>
							<Link href="/manifesto">Ler o Manifesto</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* CATEGORIAS / PRODUTOS */}
			<section
				className="w-full py-24"
				style={{ backgroundImage: "url('/bg-textura.jpg')" }}
			>
				<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
					<Link href="/produtos/oraculos">
						<Card className="bg-black border-yellow-500 hover:scale-105 transition cursor-pointer h-full p-0">
							<Image
								src="/oraculos.png"
								alt="Oráculos"
								width={400}
								height={400}
								className="rounded-t-lg object-cover aspect-square w-full"
							/>
						</Card>
					</Link>

					<Link href="/produtos/magias">
						<Card className="bg-black border-yellow-500 hover:scale-105 transition cursor-pointer h-full p-0">
							<Image
								src="/magias.png"
								alt="Magias"
								width={400}
								height={400}
								className="rounded-t-lg object-cover aspect-square w-full"
							/>
						</Card>
					</Link>

					<Link href="/produtos/farmacia">
						<Card className="bg-black border-yellow-500 hover:scale-105 transition cursor-pointer h-full p-0">
							<Image
								src="/farmacia.png"
								alt="Farmácia Espiritual"
								width={400}
								height={400}
								className="rounded-t-lg object-cover aspect-square w-full"
							/>
						</Card>
					</Link>
				</div>
			</section>

			{/* RELATOS */}
			<section className="px-6 py-24 bg-red-950">
				<h2 className="text-4xl text-center text-yellow-500 font-bold mb-12">
					Relatos Reais de Clientes
				</h2>
				<RelatosCarousel />
			</section>

			{/* BLOCO FINAL */}
			<div className="flex justify-center items-center py-20 bg-black max-w-6xl mx-auto">
				<div className="relative w-full h-[320px]">
					<Image
						src="/ze-pilintra.png"
						alt="Zé Pilintra"
						fill
						className="object-contain"
					/>
				</div>
			</div>
			<WhatsappFloating />
		</main>
	);
}
