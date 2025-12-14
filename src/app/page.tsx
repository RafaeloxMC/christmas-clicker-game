"use client";
import SantaClick from "@/components/SantaClick";
import { useState } from "react";
import Snowfall from "react-snowfall";

export default function Home() {
	const [score, setScore] = useState(0);

	return (
		<div className="flex flex-col gap-4 items-center justify-center p-16">
			<Snowfall />
			<h1 className="text-8xl">Click the Santa</h1>
			<SantaClick onClick={() => setScore(score + 1)} />
			<span className="text-4xl">You clicked Santa {score} times!</span>
		</div>
	);
}
