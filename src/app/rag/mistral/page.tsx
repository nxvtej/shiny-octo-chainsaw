/** @format */

"use client";

import { useRouter } from "next/navigation";
// import Link from "next/link";
import { useState } from "react";
import { SpinnerButton } from "@/components/ui/SpinnerButton";
import { Textarea } from "@/components/ui/Textarea";

export default function Mistral() {
	const router = useRouter();
	const [prompt, setPrompt] = useState("Mention names from the knowledge base");
	const [response, setResponse] = useState("...");
	const [loading, setLoading] = useState(false);
	const [back, setBack] = useState(false);
	const [disable, setDisable] = useState(true);
	const [placeholder, setPlaceholder] = useState(
		"Demo Prompt: Mention names from the knowledge base"
	);
	const url = process.env.NEXT_PUBLIC_APIROUTE;
	if (!url) {
		throw new Error("URL not found");
	}
	const data = JSON.stringify({
		prompt: prompt,
	});

	const clearclickHandler = async () => {
		setDisable(true);
		setPrompt("");
		setResponse("...");
		setPlaceholder("...");
	};
	const clickHandler = async () => {
		// console.log(url);
		setLoading(true);
		try {
			const resp = await fetch(url, {
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!resp.ok) {
				console.log("error");
			}
			const datap = await resp.json();
			setResponse(datap.text);
		} catch (error) {
			console.error(error);
		}
		setDisable(false);
		setLoading(false);
	};

	const backclickHandler = async () => {
		// setBack(true);
		// setResponse("...");
		// setPlaceholder("...");
		// // redicet page to this url 100xnavi.com
		// setBack(false);
		router.push("/rag");
	};
	return (
		<div className='flex flex-col mt-20 justify-center items-center'>
			<div>
				<div className='text-slate-500 text-3xl  underline'>
					<h1>Testing Mistral-AI-v1.4</h1>
				</div>
				<span className=' pt-2 text-slate-500'>Enter Prompt</span>
				<br />
				<div className='w-80 pt-4'>
					<Textarea
						placeholder={placeholder}
						className='placeholder-faded'
						onChange={(event) => {
							setPrompt(event.target.value);
						}}
					/>
					<br />
					<div className='flex justify-between'>
						<div className='space-x-2'>
							<SpinnerButton
								name='Hit BedRock'
								state={loading}
								onClick={clickHandler}></SpinnerButton>
							{/* <Link href='https://100xnavi.com'>
							<SpinnerButton name='Go Back' state={back} />
							</Link> */}
							<SpinnerButton
								name='Go Back'
								state={back}
								onClick={backclickHandler}
							/>
						</div>
						<div>
							<SpinnerButton
								variant={"secondary"}
								disabled={disable}
								name='Clear'
								state={back}
								onClick={clearclickHandler}></SpinnerButton>
						</div>
					</div>
				</div>
				<br />
				<br />
				<div className='text-slate-500 text-3xl underline'>
					<h1>Response</h1>
				</div>
			</div>
			<div className='w-80'>
				<div className='flex flex-col justify-center'>
					<span className='text-slate-500'>{response}</span>
				</div>
			</div>
		</div>
	);
}
