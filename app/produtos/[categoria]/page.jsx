import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { produtos } from "@/data/produtos";
import { Card, CardContent } from "@/components/ui/card";

export default async function CategoriaPage({ params }) {
	const { categoria } = await params;

	const produtosCategoria = produtos.filter((p) => p.categoria === categoria);

	if (!produtosCategoria.length) {
		notFound();
	}

	return (
		<main className="bg-black text-red-700 min-h-screen px-6 py-24">
			<h1 className="text-4xl text-yellow-500 font-bold text-center mb-14 capitalize">
				{categoria}
			</h1>

			<section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 auto-rows-fr">
				{produtosCategoria.map((p) => (
					<Link
						key={p.slug}
						href={`/produtos/${categoria}/${p.slug}`}
						className="h-full"
					>
						<Card className="bg-black border-red-900 hover:scale-105 transition cursor-pointer h-full flex flex-col p-0 overflow-hidden">
							<Image
								src={p.image}
								alt={p.titulo}
								width={400}
								height={400}
								className="rounded-t-lg object-cover w-full"
							/>

							<CardContent className="p-6 flex flex-col flex-1">
								<div>
									<h3 className="text-xl text-yellow-500 font-bold">
										{p.titulo}
									</h3>
									<p className="text-red-600 text-sm mt-2">{p.descricao}</p>
								</div>

								<p className="mt-auto text-yellow-500 font-bold">{p.valor}</p>
							</CardContent>
						</Card>
					</Link>
				))}
			</section>
		</main>
	);
}
