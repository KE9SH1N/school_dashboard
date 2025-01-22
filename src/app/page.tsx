import Link from "next/link";

export default function Home() {
	return (
		<div className="flex items-center justify-center h-screen capitalize text-blue-600 font-medium text-lg">
			<Link href="/admin">Click here</Link>
		</div>
	);
}
