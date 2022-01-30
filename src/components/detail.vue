<template>

	<h3 class="title">상세페이지</h3>
	<div class="contents">
		<div class="title">{{ vuelog_data[$route.params.id].title }}</div>
		<div>{{ vuelog_data[$route.params.id].content }}</div>
	</div>

	<p @click="$router.push('/detail/' + $route.params.id + '/author')">소개필요해?</p>
	<p @click="$router.push('/detail/' + $route.params.id + '/comment')">댓글쓸래?</p>

	<router-view></router-view>
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
