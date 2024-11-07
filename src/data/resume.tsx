/** @format */

import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
	name: "Navdeep",
	initials: "navi",
	url: "https://portfolio.100xnavi.com",
	location: "Haryana, India",
	locationLink: "https://www.google.com/maps/place/india",
	timeZone: "Asia/Kolkata",
	localCode: "en-IN",
	resume:
		"https://vercel-100xnavi.s3.ap-southeast-2.amazonaws.com/dev+resume+word.pdf",
	description: "Tech-savvy 21-year-old developer.",
	summary:
		"A self-motivated final-year student from [Jind, Haryana](https://www.google.com/maps/place/Jind,+Haryana/@29.3132673,76.3203049,13z/data=!3m1!4b1!4m6!3m5!1s0x391204560fee9ac5:0xe427b9de50b77db0!8m2!3d29.325508!4d76.2997909!16zL20vMDk4MDhm?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D) with coding expertise in C++, Java, and TypeScript. Proficient in DevOps, Docker, AWS, and GitHub Actions, with a competitive coding rating of [1700+](https://leetcode.com/u/nxvtej/) and strong problem-solving skills in advanced technologies.",
	avatarUrl: "/me.jpg",
	skills: [
		"C++",
		"Java",
		"React",
		"Next.js",
		"Typescript",
		"Node.js",
		"Postgres",
		"Docker",
		"AWS",
	],
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		{ href: "/rag", icon: Icons.brain, label: "Rag Model" },
	],
	email:
		"mailto:nxvtej@gmail.com?subject=Contact%20via%20Portfolio&body=Hello,%20I%20would%20like%20to%20connect%20with%20you.",
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
			Email: {
				name: "Send Email",
				url: "mailto:nxvtej@gmail.com?subject=Contact%20via%20Portfolio&body=Hello,%20I%20would%20like%20to%20connect%20with%20you",
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
				"I’ve solved 550+ LeetCode problems, focusing on algorithms like dynamic programming and backtracking, using C++ and Java. I’ve earned the 100 Days Badge for consistent practice and maintain a contest rating of 1700+, participating in coding competitions to sharpen my skills.",
		},
	],
	education: [
		{
			school: "Chandigarh University",
			href: "https://www.cuchd.in/",
			degree: "Bachelor's Degree of Engineering (BE)",
			logoUrl: "https://i.postimg.cc/VLbV77WN/copy.jpg",
			start: "2021",
			end: "2025",
		},
		{
			school: "Indus Public School",
			href: "#",
			degree: "Science (Physics, Chemistry, Maths, Computer)",
			logoUrl: "https://i.postimg.cc/yNKt3F98/download-3.jpg",
			start: "2021",
			end: "2019",
		},
		{
			school: "Christ Raja Convent School",
			href: "#",
			degree: "High School",
			logoUrl: "https://i.postimg.cc/FKxqy7gg/download-4.jpg",
			start: "2018",
			end: "2019",
		},
	],
	projects: [
		{
			title: "Connect Pro",
			href: "https://meet.100xnavi.com/",
			dates: "July 2024 - Aug 2024",
			active: true,
			description:
				"Developed a robust real-time video conferencing application virtual meetings with [Stream](https://getstream.io/video/).",
			technologies: [
				"Next.js",
				"Typescript",
				"Stream",
				"TailwindCSS",
				"Clerk",
				"Shadcn UI",
			],
			links: [
				{
					type: "Website",
					href: "https://meet.100xnavi.com/",
					icon: <Icons.globe className='size-3' />,
				},
				{
					type: "Source",
					href: "https://github.com/nxvtej/connectpro",
					icon: <Icons.github className='size-3' />,
				},
			],
			image: "https://i.postimg.cc/3RGRkpxb/connectpro.png",
		},
		{
			title: "Chatty",
			href: "https://chatty.100xnavi.com/",
			dates: "June 2023 - Present",
			active: true,
			description:
				"Designed, developed and deployed a simple chat application for friends using [Socketio](https://i.postimg.cc/fRypxS3w/image.png).",
			technologies: [
				"React.js",
				"Javascript",
				"MongoDb",
				"Prisma",
				"Node.js",
				"Express",
				"socket.io",
				"TailwindCSS",
				"Shadcn UI",
			],
			links: [
				{
					type: "Website",
					href: "https://chatty.100xnavi.com/",
					icon: <Icons.globe className='size-3' />,
				},
				{
					type: "Source",
					href: "https://github.com/nxvtej/chat-app/",
					icon: <Icons.github className='size-3' />,
				},
			],
			image: "https://i.postimg.cc/fRypxS3w/image.png",
		},
		{
			title: "DDoS attacking NEET Exam Result",
			href: "#",
			dates: "July 2024 - July 2024",
			active: true,
			description:
				"Developed a system to automatically extract participant rankings and marks from NEET servers,enhancing transparency and playing little.",
			technologies: ["Typescript", "Axios", "Cheerio"],
			links: [
				{
					type: "Source",
					href: "https://github.com/nxvtej/nta-scraper",
					icon: <Icons.github className='size-3' />,
				},
			],
			image: "https://i.postimg.cc/vHqSH80C/ddos.jpg",
		},
		{
			title: "Youtube Crawler",
			href: "https://crawler.100xnavi.com/",
			dates: "Oct 2024 - Oct 2024",
			active: true,
			description:
				"Developed a youtube playlist crawler using crawlee playwright api for content creator to visulize their video performance.",
			technologies: [
				"Next.js",
				"PlayWright",
				"Typescript",
				"TailwindCSS",
				"Shadcn UI",
			],
			links: [
				{
					type: "Source",
					href: "https://github.com/nxvtej/crawler-c",
					icon: <Icons.github className='size-3' />,
				},
				{
					type: "Website",
					href: "https://crawler.100xnavi.com/",
					icon: <Icons.globe className='size-3' />,
				},
			],
			image: "https://i.postimg.cc/bJM1qZjL/image.png",
		},
	],

	certificates: [
		{
			title: "Postman API Fundamentals Student Expert",
			dates: "October 2024",
			provider: "Postman",
			description: "",
			image: "https://i.postimg.cc/tCLLp04P/download-2.png",
		},

		{
			title: "Front-End Developer Professional Certificate",
			dates: "August 2024",
			provider: "Meta",
			description: "",
			image: "https://i.postimg.cc/rwx7phDH/images-2.png",
		},
		{
			title: "Developing Back-End Apps with Node.js and Express",
			dates: "August 2024",
			provider: "IBM",
			description: "",
			image: "https://i.postimg.cc/25Fp0HmW/ibm.jpg",
		},
		{
			title: "Full Stack Web Development",
			dates: "July 2024",
			provider: "100xdev",
			description: "",
			image: "https://i.postimg.cc/0QcTsbz2/download-1.jpg",
		},
		{
			title: "Algorithmic Toolbox",
			dates: "June 2024",
			provider: "UC San Diego",
			description: "",
			image: "https://i.postimg.cc/Vvh2Jp9x/download-1.png",
		},
		{
			title: "Java as a Second Language Specialization",
			dates: "January 2024",
			provider: "Coursera",
			description: "",
			image: "https://i.postimg.cc/2j9s9Lp0/download-2.jpg",
		},
	],
} as const;
