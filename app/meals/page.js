import Link from "next/link";

export default function MealsPage() {
	return (
		<div>
			<h1>Meals Page</h1>
			<p>
				Welcome to the meals page! Here you can find a variety of meal options.
			</p>
			<p>
				<Link href="/meals/meal-1">Meal 1</Link>
				<br />
				<Link href="/meals/meal-2">Meal 2</Link>
			</p>
		</div>
	);
}
