import Image from "next/image";
import { useState } from "react";

type SantaClickProps = {
	onClick: () => void;
};

export default function SantaClick({ onClick }: SantaClickProps) {
	const [isEnlarged, setIsEnlarged] = useState(false);

	const handleClick = () => {
		onClick();
		if (!isEnlarged) {
			setIsEnlarged(true);
			setTimeout(() => setIsEnlarged(false), 50);
		}
	};

	return (
		<button onClick={handleClick}>
			<Image
				src="/santa.png"
				width={512}
				height={512}
				alt="Jolly Orpheus"
				className={`animate-spin [animation-duration:3s] transition-transform duration-150 ${
					isEnlarged ? "scale-125" : "scale-100"
				}`}
			/>
		</button>
	);
}
