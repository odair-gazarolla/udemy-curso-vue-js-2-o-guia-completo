<template>
	<v-content>
		<mycarousel></mycarousel>
	</v-content>
</template>

<script>
	import Carousel from '@/widgets/Carousel.vue'
	export default {
		components: {'mycarousel': Carousel}
	}
</script>