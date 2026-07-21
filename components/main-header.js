import imgUrl from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function MainHeader() {
	return (
		<header className="main-header">
			<Link href="/">
				<Image src={imgUrl.src} alt="Logo" width={80} height={80} />
			</Link>

			<nav>
				<ul>
					<li>
						<Link href="/meals">Ngemil</Link>
					</li>
					<li>
						<Link href="/community">Komunitas</Link>
					</li>
					<li>
						<Link href="/meals/share">Berbagi</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
