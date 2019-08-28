<template>
	<main id="main">
		<div class="container">
			<div class="row">
				<section id="basic" class="col-xs-12 col-md-6">
					<div class="avatar">
						<img src="../assets/about/avatar.jpg">
					</div>
					<p class="name">謝孟錡 (Brent Hsieh)</p>
					<p class="birthday">1990/12/13 <span class="age">29 歲</span></p>
					<p class="gender">男性</p>
					<p class="mobile"><a href="tel:0936882533">0936882533</a></p>
					<p class="email"><a href="mailto:horus882@gmail.com">horus882@gmail.com</a></p>
				</section>
				<section id="introduction" class="col-xs-12 col-md-6">
					<p class="description">這裡是很害羞的自介 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</section>
			</div>
			<div class="row">
				<section id="experience">
					<h2>工作經歷</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</section>
				<section id="education">
					<h2>學歷</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</section>
			</div>
			<div class="row">
				<section id="skills">
					<h2>專業技能</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</section>
				<section id="languages">
					<h2>語言能力</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</section>
			</div>
		</div>
	</main>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

section {

	margin: 50px 0;

	h2 {

		font-size: 28px;

	}
	
}

#basic {

	width: 100%;

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