/** @format */

import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { Metadata } from "next";
import Link from "next/link";

export const metadata = {
	title: "Blog",
	description: "My thoughts on software development, life, and more.",
};

/*
for dynamic metadata generate i need some params and get the response in it

export async function generateMetadata({
params:{postId},}:(Type)): Promise<Metadata>{
  const response = await fetch(`xxx.com/${postID}`)
  const post = await response.json()
  return{
    title:post.title,
    description:post.description
    
    // go custom metaimage for custom path
    openGraph:{
    image:{
      url:post.image}
    }
  }
}

// question is, we are calling server in metadata and then in main fuctiona s well this will lead to double calling
so caching is important, 
here nextjs does magic automatially , so no worry only with fetch 

lets say we use something else soo
import {cache} from "react"
const getpost = cache(async (postId:string)=>{
  const response = await prisma.post.findunique(postid)
  return response})

this type of thingi will get dynamic metadata
*/
const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
	const posts = await getBlogPosts();

	return (
		<section>
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h1 className='font-medium text-2xl mb-8 tracking-tighter'>blog</h1>
			</BlurFade>
			{posts
				.sort((a, b) => {
					if (
						new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
					) {
						return -1;
					}
					return 1;
				})
				.map((post, id) => (
					<BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
						<Link
							className='flex flex-col space-y-1 mb-4'
							href={`/blog/${post.slug}`}>
							<div className='w-full flex flex-col'>
								<p className='tracking-tight'>{post.metadata.title}</p>
								<p className='h-6 text-xs text-muted-foreground'>
									{post.metadata.publishedAt}
								</p>
							</div>
						</Link>
					</BlurFade>
				))}
		</section>
	);
}
