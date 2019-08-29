<template>
	<main id="main">
		<div class="container">
			<div class="row">
				<Basic />
				<Introduction />
			</div>
			<div class="row">
				<Skills />
				<Experience />
				<Education />
				<!--
				<section id="languages" class="col-xs-12">
					<h2><i class="fas fa-xs fa-language"></i>Languages</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</section>
				-->
			</div>
		</div>
	</main>
</template>

<script>

import Basic from '../components/about/Basic.vue'
import Introduction from '../components/about/Introduction.vue'
import Skills from '../components/about/Skills.vue'
import Experience from '../components/about/Experience.vue'
import Education from '../components/about/Education.vue'

export default {
	components: {
		Basic,
		Introduction,
		Skills,
		Experience,
		Education
	}
}

</script>

<style lang="scss">

section {

	width: 100%;
	margin: 50px 0;

	h2 {

		font-size: 28px;
		text-transform: uppercase;
		margin-bottom: 25px;

		.fas {
			vertical-align: top;
			margin-top: 6px;
			margin-right: 7.5px;
		}

	}

	h3 {
		color: #666666;
		font-size: 18px;
		font-weight: 400;
	}
	
}

#basic {

	.avatar {

		width: 160px;
		height: 160px;
		margin: 0 auto 5px;
		border-radius: 50%;
		border: #dfdfdf 5px solid;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
		}

	}

	p {
		margin-bottom: 5px;
	}

}

</style>