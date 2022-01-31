<template>

	<nav class="navbar fixed-top navbar-light bg-light">
		<a class="navbar-brand" href="#">Fixed top</a>

		<ul class="nav">
			<li class="nav-item">
				<!-- <a class="nav-link active" href="#">List</a> -->
				<router-link to="/list">리스트페이지</router-link>
			</li>
			<li class="nav-item">
				<!-- <a class="nav-link" href="#">Link</a> -->
				<router-link to="/home">홈페이지</router-link>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">Link</a>
			</li>
			<li class="nav-item">
				<a class="nav-link disabled">Disabled</a>
			</li>
		</ul>
	</nav>

	<home />


	<router-view :vuelog_data="vuelog_data"></router-view>

</template>

<script>
import vuelog_data from './assets/data/vuelog_data.js'
import home from './components/home.vue'


export default {
	name: 'App',
	data() {
		return {
			vuelog_data: vuelog_data,
		}
	},
	components: {
		home: home,
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
