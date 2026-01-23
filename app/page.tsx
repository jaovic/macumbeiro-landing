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
							<a href="#manifesto">Conhecer a Caminhada</a>
						</Button>
					</div>
				</div>
			</section>

			{/* MANIFESTO */}
			<section
				id="manifesto"
				className="px-6 py-32 bg-gradient-to-b from-black via-red-950 to-black"
			>
				<div className="max-w-4xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-14 text-center">
						Manifesto Espiritual
					</h2>

					<div className="space-y-8 text-red-600 leading-relaxed text-lg">
						<p>
							Há quatro anos iniciei minha caminhada consciente na Umbanda, numa
							busca diária, assídua e silenciosa pelos mistérios do invisível.
							pelos mistérios do invisível. Atravessei casas, correntes e provas
							até firmar meus pés na Casa de Umbanda Pai Oxalá, onde, há três
							anos, foi me proporcionado vivências e experiências incríveis.
						</p>

						<p>
							Ali também me foi confiado o atabaque, o coração vivo da gira e,
							desde o dia em que fui autorizado, sustento, com meu toque, com
							amor e muita energia os portais por onde os guias descem. Hoje,
							mais de cem almas são acolhidas, curadas e realinhadas a cada
							sessão.
						</p>

						<p>
							Fui iniciado no Reiki pela linhagem do mestre Mikao Usui e honrei
							essa porta. Ainda assim, compreendi que aquela não era a raiz da
							minha alma. A minha raiz estava no sangue, nos mortos e nas
							encruzilhadas do tempo.
						</p>

						<p>
							Então fui encontrado pela Quimbanda Luciferiana. Recebi chaves,
							selos e outorgas e fui marcado como bruxo quimbandeiro. Porém, ao
							perceber caminhos que não correspondiam à verdade do meu espírito
							e intenções que não caminhavam em retidão, segui adiante. Busquei
							a fonte mais profunda e me batizei na Quimbanda Ancestral, templo
							de Quimbanda Rei 7 da Lira, onde os Exus primordiais caminham, os
							mortos falam e a magia não se aprende — se desperta.
						</p>

						<p>
							Realizo atendimentos oraculares, feitiçarias, curas, abertura de
							caminhos, sorte, prosperidade, proteção, equilíbrio mental e
							reorganização do destino. Não opero por vaidade, mas por
							fundamento, pacto e autorização espiritual.
						</p>

						<p>
							Minha força não vem apenas do que aprendi;
							<br />
							vem do que herdei.
						</p>

						<p>
							Na minha ancestralidade paterna, meu tataravô era magista de
							guerra e defesa, capaz de proteger um território inteiro, a
							quilômetros de distância, com mirongas e feitiços firmados nos
							caminhos. Minha avó, com suas garrafadas milagrosas, curava onde a
							matéria não alcança. Meu tio, com mais de trinta e cinco anos no
							Candomblé Angola, é coluna viva da minha linhagem.
						</p>

						<p>
							Na minha linhagem materna, herdei a fé mística e inabalável:
							mulheres que rezam, sonham e pressentem. Desde meu nascimento, fui
							passado por benzimentos, cruzamentos e selamentos que foram
							cruciais para minha saúde e evolução espiritual — para sobreviver
							ao que outros não sobreviveriam. Minha mãe recebe sonhos que não
							pertencem a este mundo. Minha avó antevia acontecimentos antes que
							o tempo os revelasse. Meu avô, homem devoto aos santos católicos,
							os buscava, cultuava e lembrava com devoção verdadeira,
							sustentando no altar a força da fé ancestral.
						</p>

						<p className="font-bold text-red-500">
							Eu sou continuidade de um pacto antigo.
						</p>

						<p>
							Sou aquele que caminha entre o altar e a encruzilhada.
							<br />
							Sou aquele que acende velas para o céu e para os mortos.
							<br />
							Sou portador de chaves, herdeiro de feitiços e voz de Exu.
						</p>

						<p className="text-yellow-500 font-extrabold text-xl text-center pt-6">
							Não sigo este caminho.
							<br />
							Eu sou este caminho.
						</p>
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
						<Card className="bg-black border-red-900 hover:scale-105 transition cursor-pointer h-full p-0">
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
						<Card className="bg-black border-red-900 hover:scale-105 transition cursor-pointer h-full p-0">
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
						<Card className="bg-black border-red-900 hover:scale-105 transition cursor-pointer h-full p-0">
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

			<footer className="text-center text-xs text-red-800 pb-6">
				Resultados variam conforme fé, merecimento e situação espiritual.
			</footer>

			<WhatsappFloating />
		</main>
	);
}
