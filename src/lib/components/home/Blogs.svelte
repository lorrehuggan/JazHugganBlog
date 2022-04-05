<script lang="ts">
	import type { BlogsResponse } from '$lib/types/blogs';
	export let blogs: BlogsResponse[];
</script>

<section class="mx-auto grid w-1/2 grid-cols-4 gap-4">
	{#each blogs as blog}
		<div class="w-full">
			<div
				class="relative h-64 w-full cursor-pointer overflow-hidden rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-3"
			>
				<a
					href={`/blog/${blog.fields.heading.split(' ', blog.fields.heading.length - 1).join('-')}`}
				>
					<img
						src={`https:${blog.fields.image.fields.file.url}`}
						alt={blog.fields.heading.split(' ', blog.fields.heading.length - 1).join('-')}
						class="h-full w-full object-cover"
					/>
				</a>
			</div>
			<p class="mt-2 font-bold">
				{`${blog.fields.heading.substring(0, 23)}${blog.fields.heading.length > 23 ? '...' : ''}`}
			</p>
			<p class="mt-1">{blog.fields.date.split('T')[0]}</p>
		</div>
	{/each}
</section>
