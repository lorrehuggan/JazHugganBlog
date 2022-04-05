<script>
	export let profileImage;
	let scrollY;
	
</script>

<section class="mx-auto mb-14 w-1/2">
	<div class="grid w-full grid-cols-2">
		<div><h1 class="font-serif text-9xl">Mum, Chef, Foody</h1></div>
		<div class="flex justify-end">
			<img src={`https:${profileImage}`} alt="portrait" class=" w-2/3 rounded-lg object-cover" />
		</div>
	</div>
</section>
