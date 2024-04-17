"use client"
import {useRouter} from "next/navigation"

export default function NotFound() {

	const router = useRouter()
	const handleClick = () => {
		router.back()
	}

	return (
		<div>
			<h2>Not Found</h2>
			<br></br>
			<p>Could not find requested resource</p>
			<br></br>
			<button onClick={handleClick}>Go Back</button>
		</div>
	);
}
