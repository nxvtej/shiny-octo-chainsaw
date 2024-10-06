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
	resume: "https://www.portfolio.100xnavi.com",
	description: "21-year-old tech enthusiast, seeking an SDE position.",
	summary:
		"A self-motivated final-year student from [Jind, Haryana](https://www.google.com/maps/place/Jind,+Haryana/@29.3132673,76.3203049,13z/data=!3m1!4b1!4m6!3m5!1s0x391204560fee9ac5:0xe427b9de50b77db0!8m2!3d29.325508!4d76.2997909!16zL20vMDk4MDhm?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D) with coding expertise in C/C++, JavaScript, TypeScript, ReactJs, NodeJs, and SQL. Proficient in working with DevOps, Docker, AWS, and GitHub Actions. Skilled problem-solver with 450+ [LeetCode](https://www.leetcode.com/u/nxvtej) solutions and experience in cutting-edge technologies.",
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
			email: {
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
			// video: "https://cdn.magicui.design/bento-grid.mp4",
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
			// video: "https://cdn.llm.report/openai-demo.mp4",
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
