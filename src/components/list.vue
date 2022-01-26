<template>
	<div v-for="(vuelog_item, i) in vuelog_data" :key="i">
		<h5>{{ vuelog_item.title }}</h5>
		<p>{{ vuelog_item.date }}</p>
	</div>
</template>

<script>
export default {
	name: 'list',
	props: {
		vuelog_data: Array,
	}
}
</script>

<style>

</style>
