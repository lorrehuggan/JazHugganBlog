<script context="module" lang="ts">
	import { contentClient } from '$lib/contentful';
	import type { BlogsResponse } from '$lib/types/blogs';
	export async function load() {
		const blogs = await contentClient.getEntries({
			content_type: 'blogPost',
			limit: 4
		});
		const profileImage = await contentClient.getAsset('xe0A6W4ozcMIG4xwvP1Dt');
		return { props: { blogs: blogs.items, profileImage: profileImage.fields.file.url } };
	}
</script>

<script lang="ts">
	import Blogs from '$lib/components/home/Blogs.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	export let blogs: BlogsResponse[];
	export let profileImage: string;
</script>

<Hero {profileImage} />
<Blogs {blogs} />
