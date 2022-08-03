<script>
export default {
	data() {
		return {
			center: { lat: -33.876115, lng: 18.5008116 },
			markers: [
				{
					position: {
						lat: -33.876115,
						lng: 18.5008116,
					},
				},
				{
					position: {
						lat: -33.9685533,
						lng: 18.5662383,
					},
				},
				{
					position: {
						lat: -34.0461583,
						lng: 18.7047383,
					},
				},
				{
					position: {
						lat: -31.8994016,
						lng: 26.8671716,
					},
				},
				{
					position: {
						lat: -31.8942983,
						lng: 26.878175,
					},
				},
				{
					position: {
						lat: -31.9998233,
						lng: 27.5801216,
					},
				},
			],
		};
	},
};
</script>
<template>
	<div id="home_page">
		<div class="navigation shadow-sm">
			<router-link to="/" class="nav-brand-img"><img src="../assets/img/quickloc8.svg" alt=""></router-link>
			<router-link to="/messages" class="message-btn"><i class="fa fa-comment-alt"></i></router-link>
		</div>
		<div class="">
			<h3>Track your taxi</h3>
			<p>Track each movement of your taxi, where it is all the time and trips it made</p>
		</div>
		<GMapMap :center="center" :zoom="10" map-type-id="terrain" style="width: 100vw; height: 60vh">
			<GMapCluster :zoomOnClick="true">
				<GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="false" @click="center = m.position" />
			</GMapCluster>
		</GMapMap>
	</div>
</template>
