/** @format */

"use client";
// import { SpinnerButton } from "@/components/ui/SpinnerButton";
/** @format */

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function RAG() {
	const router = useRouter();

	return (
		<div className='flex flex-col min-h-screen justify-center items-center'>
			<div className='space-y-4'>
				<div className='text-slate-500 text-3xl'>
					<h1>Test Available Models</h1>
				</div>
				<div>
					<Button
						className=' pt-2'
						onClick={() => {
							router.push("/rag/llama");
						}}>
						Llama
					</Button>
				</div>
			</div>
		</div>
	);
}
