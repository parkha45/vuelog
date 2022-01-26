<template>

	<h3 class="title">상세페이지</h3>
	<div class="contents">
		<div class="title">{{ vuelog_data[$route.params.id].title }}</div>
		<div>{{ vuelog_data[$route.params.id].content }}</div>
	</div>
</template>

<script>
export default {
	name: 'Detail',
	props: {
		vuelog_data: Array,
	}
}
</script>

<style>

</style>
