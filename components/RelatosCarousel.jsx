"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const prints = Array.from(
	{ length: 20 },
	(_, i) => `/prints/print-${i + 1}.jpg`,
);

export default function PrintsCarousel() {
	const [index, setIndex] = useState(0);
	const total = prints.length;

	const prev = () => {
		if (index === 0) return;
		setIndex(index - 1);
	};

	const next = () => {
		if (index + 1 >= total) return;
		setIndex(index + 1);
	};

	return (
		<section className="max-w-6xl mx-auto px-6 py-20">
			<h2 className="text-3xl font-bold text-yellow-500 mb-8">Relatos Reais</h2>

			<div className="relative flex items-center justify-center">
				{/* Botão esquerdo */}
				<button
					onClick={prev}
					disabled={index === 0}
					className="
						absolute -left-12
						w-10 h-10
						flex items-center justify-center
						rounded-full
						bg-black/70
						border border-red-900
						text-yellow-500
						hover:scale-110 transition
						disabled:opacity-30
					"
				>
					<ChevronLeft />
				</button>

				{/* Print */}
				<div className="relative w-[320px] md:w-[380px] aspect-[9/16] border border-red-900 rounded-xl overflow-hidden bg-black">
					<Image
						src={prints[index]}
						alt={`Relato ${index + 1}`}
						fill
						className="object-cover"
						priority
					/>
				</div>

				{/* Botão direito */}
				<button
					onClick={next}
					disabled={index + 1 >= total}
					className="
						absolute -right-12
						w-10 h-10
						flex items-center justify-center
						rounded-full
						bg-black/70
						border border-red-900
						text-yellow-500
						hover:scale-110 transition
						disabled:opacity-30
					"
				>
					<ChevronRight />
				</button>
			</div>

			{/* Indicadores */}
			<div className="flex justify-center gap-2 mt-6">
				{prints.map((_, i) => (
					<span
						key={i}
						className={`w-2 h-2 rounded-full ${
							i === index ? "bg-yellow-500" : "bg-red-900"
						}`}
					/>
				))}
			</div>
		</section>
	);
}
