import Image from "next/image";

type SantaClickProps = {
	onClick: () => void;
};

export default function SantaClick({ onClick }: SantaClickProps) {
	return (
		<button onClick={onClick}>
			<Image
				src="/santa.png"
				width={512}
				height={512}
				alt="Jolly Orpheus"
				className="animate-spin [animation-duration:3s]"
			/>
		</button>
	);
}
