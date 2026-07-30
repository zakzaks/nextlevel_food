"use client";

import Link from "next/link";
import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";

export default function Navlink({ href, children }) {
	const path = usePathname();

	return (
		<Link href={href} className={path.match(href) ? classes.active : undefined}>
			{children}
		</Link>
	);
}
