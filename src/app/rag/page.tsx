/** @format */

"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function RAG() {
	const router = useRouter();
	const backclickHandler = async () => {
		console.log("back");
		router.push("/");
	};

	return (
		<div className='flex flex-col mt-20 justify-center items-center'>
			<div className='space-y-4'>
				<div className='text-slate-500 text-3xl'>
					<h1>Test Available Models</h1>
				</div>
				<div className='flex flex-col space-y-2'>
					<Button
						variant={"default"}
						onClick={() => {
							router.push("/rag/llama");
						}}>
						Llama
					</Button>
					<Button
						variant={"default"}
						onClick={() => {
							router.push("/rag/titan");
						}}>
						Titan
					</Button>
					<Button
						variant={"default"}
						onClick={() => {
							router.push("/rag/mistral");
						}}>
						Mistral AI
					</Button>
				</div>
				<div>
					<Button variant={"outline"} onClick={backclickHandler}>
						Back
					</Button>
				</div>
			</div>
		</div>
	);
}
