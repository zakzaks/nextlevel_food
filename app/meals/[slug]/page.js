export default async function DetailMealsPage({ params }) {
	const { slug } = await params;
	return (
		<div>
			<h1>Detail Meals {slug} Page</h1>
			<p>
				Welcome to the detail meals page! Here you can find detailed information
				about a specific meal.
			</p>
		</div>
	);
}
