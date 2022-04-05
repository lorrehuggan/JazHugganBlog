<script lang="ts">
	import { page } from '$app/stores';

	let path: string;
	$: path = $page.url.pathname;
</script>

<nav class="mx-auto flex h-16 w-1/2 items-center justify-between">
	<h1
		class={`${
			path === '/' && 'text-rose-500'
		} transition-colors ease-in-out duration-500 text-xl font-black font-serif uppercase tracking-wider `}
	>
		<a href="/"> Jaz Huggan </a>
	</h1>
	<ul class="flex w-1/2 justify-between pl-4">
		<li>
			<a
				href="/blog"
				class={`${
					path.includes('/blog') && 'text-rose-500'
				} transition-colors ease-in-out duration-500 uppercase font-semibold`}
			>
				Blog
			</a>
		</li>
		<li>
			<a
				href="/about"
				class={`${
					path.includes('/about') && 'text-rose-500'
				} transition-colors ease-in-out duration-500 uppercase font-semibold`}
			>
				About
			</a>
		</li>
		<li>
			<a
				href="/gallery"
				class={`${
					path.includes('/gallery') && 'text-rose-500'
				} transition-colors ease-in-out duration-500 uppercase font-semibold`}
			>
				Gallery
			</a>
		</li>
		<li>
			<a
				href="/contact"
				class={`${
					path.includes('/contact') && 'text-rose-500'
				} transition-colors ease-in-out duration-500 uppercase font-semibold`}
			>
				Contact
			</a>
		</li>
	</ul>
</nav>
