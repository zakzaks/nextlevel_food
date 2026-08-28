"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
	const imageInput = useRef();
	const [pickedImage, setPickedImage] = useState(null);

	function handlePickClick() {
		imageInput.current.click();
	}

	function handleImageChange(event) {
		const file = event.target.files[0];

		if (!file) {
			return;
		}

		const fileReader = new FileReader();
		fileReader.onload = () => {
			setPickedImage(fileReader.result);
		};
		fileReader.readAsDataURL(file);
	}

	return (
		<div className={classes.picker}>
			<label htmlFor={label}>{}</label>
			<div className={classes.controls}>
				<div className={classes.preview}>
					{!pickedImage && <p>No image picked yet.</p>}
					{pickedImage && <Image src={pickedImage} alt="Preview" fill />}
				</div>
				<input
					className={classes.input}
					type="file"
					id="image"
					name={label}
					accept="image/png, image/jpeg"
					ref={imageInput}
					onChange={handleImageChange}
				/>
				<button
					className={classes.button}
					type="button"
					onClick={handlePickClick}
				>
					Choose Image
				</button>
			</div>
		</div>
	);
}
