import imgUrl from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";

export default function MainHeader() {
	const path = usePathname();
	return (
		<>
			<MainHeaderBackground />
			<header className={classes.header}>
				<Link className={classes.logo} href="/">
					<Image
						src={imgUrl.src}
						alt="Logo"
						width={80}
						height={80}
						loading="eager"
						priority
					/>
					NextLevel Food
				</Link>

				<nav className={classes.nav}>
					<ul>
						<li>
							<Link href="/meals">Daftar Menu</Link>
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
		</>
	);
}
