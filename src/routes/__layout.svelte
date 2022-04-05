<script>
	import Nav from '$lib/components/layout/Nav.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import '../app.css';
</script>

<Nav />
<main class="min-h-[calc(100vh-4rem)] py-10">
	<slot />
</main>
<Footer />
