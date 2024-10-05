/** @format */

import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
	name: "Navdeep",
	initials: "Jr",
	url: "https://portfolio.100xnavi.com",
	location: "HR, IN",
	locationLink: "https://www.google.com/maps/place/india",
	description: "21-year-old tech enthusiast, seeking an SDE position.",
	summary:
		"A self-motivated final-year student with coding expertise in C/C++, JavaScript, TypeScript, ReactJs, NodeJs, and SQL. Proficient in working with DevOps, Docker, AWS, and GitHub Actions. Skilled problem-solver with 450+ LeetCode solutions and experience in cutting-edge technologies.",
	avatarUrl: "/me.jpg",
	skills: [
		"C++",
		"Java",
		"React",
		"Next.js",
		"Typescript",
		"Node.js",
		"Python",
		"Postgres",
		"Docker",
	],
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		{ href: "/blog", icon: NotebookIcon, label: "Blog" },
	],
	contact: {
		email: "nxvtej@gmail.com",
		tel: "+917988672006",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/nxvtej",
				icon: Icons.github,

				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/nxvdeep/",
				icon: Icons.linkedin,

				navbar: true,
			},
			X: {
				name: "X",
				url: "https://x.com/nxvdeeep",
				icon: Icons.x,

				navbar: true,
			},
			email: {
				name: "Send Email",
				url: "#",
				icon: Icons.email,

				navbar: true,
			},
		},
	},

	work: [
		{
			company: "Personal Projects",
			badges: [],
			href: "https://github.com/nxvtej",
			location: "University",
			title: "Building Stuff",
			logoUrl: "/github.svg",
			start: "March 2023",
			end: "Present",
			description: `I build projects for learning purposes using the MERN stack and Next.js. My focus is on creating full-stack web applications, improving my skills with modern tools like React, Node.js, and MongoDB. I enjoy the challenge of integrating backend functionality with seamless frontend user experiences, and I'm continuously learning to refine my approach.`,
		},
		{
			company: "Problem Solving",
			badges: [],
			href: "https://leetcode.com/nxvtej",
			location: "University",
			title: "Problem Solver",
			logoUrl: "/leetcode.svg",
			start: "January 2024",
			end: "Present",
			description:
				"I’ve solved 450+ LeetCode problems, focusing on algorithms like dynamic programming and backtracking, using C++ and Java. I’ve earned the 100 Days Badge for consistent practice and maintain a contest rating of 1427, participating in coding competitions to sharpen my skills.",
		},
	],
	education: [
		{
			school: "Chandigarh University",
			href: "https://www.cuchd.in/",
			degree: "Bachelor's Degree of Engineering (BE)",
			logoUrl: "/chandigarh.png",
			start: "2021",
			end: "2024",
		},
		{
			school: "Indus Public School",
			href: "#",
			degree: "Science (Physics, Chemistry, Maths, Computer)",
			logoUrl: "/",
			start: "2021",
			end: "2019",
		},
		{
			school: "Christ Raja Convent School",
			href: "#",
			degree: "High School",
			logoUrl: "/",
			start: "2018",
			end: "2019",
		},
	],
	projects: [
		{
			title: "Chat Collect",
			href: "https://chatcollect.com",
			dates: "Jan 2024 - Feb 2024",
			active: true,
			description:
				"With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
			technologies: [
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Stripe",
				"Shadcn UI",
				"Magic UI",
			],
			links: [
				{
					type: "Website",
					href: "https://chatcollect.com",
					icon: <Icons.globe className='size-3' />,
				},
			],
			image: "",
			video:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
		},
		{
			title: "Magic UI",
			href: "https://magicui.design",
			dates: "June 2023 - Present",
			active: true,
			description:
				"Designed, developed and sold animated UI components for developers.",
			technologies: [
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Stripe",
				"Shadcn UI",
				"Magic UI",
			],
			links: [
				{
					type: "Website",
					href: "https://magicui.design",
					icon: <Icons.globe className='size-3' />,
				},
				{
					type: "Source",
					href: "https://github.com/magicuidesign/magicui",
					icon: <Icons.github className='size-3' />,
				},
			],
			image: "",
			video: "https://cdn.magicui.design/bento-grid.mp4",
		},
		{
			title: "llm.report",
			href: "https://llm.report",
			dates: "April 2023 - September 2023",
			active: true,
			description:
				"Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
			technologies: [
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Shadcn UI",
				"Magic UI",
				"Stripe",
				"Cloudflare Workers",
			],
			links: [
				{
					type: "Website",
					href: "https://llm.report",
					icon: <Icons.globe className='size-3' />,
				},
				{
					type: "Source",
					href: "https://github.com/dillionverma/llm.report",
					icon: <Icons.github className='size-3' />,
				},
			],
			image: "",
			video: "https://cdn.llm.report/openai-demo.mp4",
		},
		{
			title: "Automatic Chat",
			href: "https://automatic.chat",
			dates: "April 2023 - March 2024",
			active: true,
			description:
				"Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
			technologies: [
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Shadcn UI",
				"Magic UI",
				"Stripe",
				"Cloudflare Workers",
			],
			links: [
				{
					type: "Website",
					href: "https://automatic.chat",
					icon: <Icons.globe className='size-3' />,
				},
			],
			image: "",
			video:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
		},
	],

	hackathons: [
		{
			title: "Cognizance",
			dates: "March 15th - 21th, 2024",
			location: "Uttarakhand, Roorkee",
			description:
				"Developed a trading algorithm which trades stocks based on averages using pinescript.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
			links: [],
		},
	],
} as const;
