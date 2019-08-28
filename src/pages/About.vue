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
				<section id="skills" class="col-xs-12">
					<h2><i class="fas fa-xs fa-wrench"></i>Skills</h2>
					<div class="container-fluid">
						<div class="row">
							<div class="col-xs-12 col-md-4">
								<h3>Front-End</h3>
								<ul>
									<li>HTML5</li>
									<li>CSS3</li>
									<li>JavaScript</li>
									<li>Responsive Web Design</li>
									<li>Bootstrap</li>
									<li>jQuery</li>
									<li>Vue</li>
									<li>React</li>
									<li>SVG</li>
									<li>SEO</li>
									<li>各平台 API 串接</li>
								</ul>
							</div>
							<div class="col-xs-12 col-md-4">
								<h3>Back-End</h3>
								<ul>
									<li>PHP</li>
									<li>MySQL</li>
									<li>phpMyAdmin</li>
								</ul>
							</div>
							<div class="col-xs-12 col-md-4">
								<h3>Others</h3>
								<ul>
									<li>VS Code</li>
									<li>Sublime Text</li>
									<li>Photoshop</li>
									<li>Illustrator</li>
									<li>Git</li>
									<li>Spark Ar</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section id="experience" class="col-xs-12">
					<h2><i class="fas fa-xs fa-briefcase"></i>Experience</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</section>
				<section id="education" class="col-xs-12">
					<h2><i class="fas fa-xs fa-book"></i>Education</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</section>
				<section id="languages" class="col-xs-12">
					<h2><i class="fas fa-xs fa-language"></i>Languages</h2>
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

	width: 100%;
	margin: 50px 0;

	h2 {

		font-size: 28px;
		text-transform: uppercase;
		margin-bottom: 25px;

		.fas {
			vertical-align: top;
			margin-top: 6px;
			margin-right: 5px;
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

#skills {

	ul {
		list-style: none;
	}

}

</style>