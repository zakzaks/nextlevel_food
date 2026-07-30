import imgUrl from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import Navlink from "./nav-link";

export default function MainHeader() {
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
							<Navlink href="/meals">Daftar Menu</Navlink>
						</li>
						<li>
							<Navlink href="/community">Komunitas</Navlink>
						</li>
						<li>
							<Navlink href="/meals/share">Berbagi</Navlink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
