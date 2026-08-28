import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
	const { pending } = useFormStatus();

	return (
		<button action="submit" disabled={pending}>
			{pending ? "Submitting..." : "Share Meal"}
		</button>
	);
}
