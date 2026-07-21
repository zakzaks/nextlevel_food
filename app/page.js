import Link from "next/link";

export default function Home() {
	return (
		<main>
			<h1 style={{ color: "white", textAlign: "center" }}>
				Time to get started!
			</h1>
			<p>
				<Link href="/meals">Ngemil</Link>
			</p>
			<p>
				<Link href="/meals/share">Berbagi</Link>
			</p>
			<p>
				<Link href="/community">Komunitas</Link>
			</p>
		</main>
	);
}
