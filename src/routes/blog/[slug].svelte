<script context="module" lang="ts">
	import { contentClient } from '$lib/contentful';
	import type { ItemFields } from '$lib/types/blog';

	export async function load({ params }) {
		const slug = params.slug.split('-').join(' ');
		const post = await contentClient.getEntries({
			content_type: 'blogPost',
			'fields.heading': slug
		});
		return {
			props: { post: post.items[0].fields }
		};
	}
</script>

<script lang="ts">
	export let post: ItemFields;
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
</script>

<section class="mx-auto w-1/2">
	<h1 class="mb-10 font-serif text-8xl">{post.heading}</h1>
	<p class="mb-4">{post.date.split('T')[0]}</p>
	<img
		class="mb-10 h-72 w-full rounded object-cover"
		src={`https:${post.image.fields.file.url}`}
		alt=""
	/>
	<div class="prose prose-xl">
		{@html documentToHtmlString(post.body)}
	</div>
</section>
