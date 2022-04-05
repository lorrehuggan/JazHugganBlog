<script context="module" lang="ts">
	import { contentClient } from '$lib/contentful';
	import type { BlogsResponse } from '$lib/types/blogs';
	export async function load() {
		const blogs = await contentClient.getEntries({
			content_type: 'blogPost',
			limit: 4
		});
		return { props: { blogs: blogs.items } };
	}
</script>

<script lang="ts">
	export let blogs: BlogsResponse[];
</script>

<section class="mx-auto w-1/2">
	<h1 class="mb-14 text-9xl">Blogs</h1>
	{#each blogs as blog}
		<div class="mb-6 flex items-center">
			<img
				src={`https:${blog.fields.image.fields.file.url}`}
				alt=""
				class="mr-6 h-16 w-16 rounded rounded-full object-cover"
			/>
			<div>
				<a
					href={`/blog/${blog.fields.heading.split(' ', blog.fields.heading.length - 1).join('-')}`}
				>
					<h4 class="text-xl font-bold">{blog.fields.heading}</h4>
				</a>
				<p class=" text-neutral-500">{blog.fields.date.split('T')[0]}</p>
			</div>
		</div>
	{/each}
</section>
