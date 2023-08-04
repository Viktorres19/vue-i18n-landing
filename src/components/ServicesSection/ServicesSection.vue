<script setup>

</script>

<template>
	<section class="services">
		<div class="container">
			<div class="program">
				<h3>{{$t('provideHeader')}}</h3>
				<div class="program-list">
					<div class="program-item">
						<img alt="program icon" src="@/assets/img/program-icon-01.svg">
						<p>
							{{$t('provideTextProvide')}}
						</p>
					</div>
					<div class="program-item">
						<img alt="program icon" src="@/assets/img/program-icon-02.svg">
						<p>
							{{$t('provideTextBuild')}}
						</p>
					</div>
					<div class="program-item">
						<img alt="program icon" src="@/assets/img/program-icon-03.svg">
						<p>
							{{$t('provideTextSupport')}}
						</p>
					</div>
					<div class="program-item">
						<img alt="program icon" src="@/assets/img/program-icon-04.svg">
						<p>
							{{$t('provideTextAttract')}}
						</p>
					</div>
				</div>
			</div>
			<div class="groups">
				<h3>{{$t('targetHeader')}}</h3>
				<ul class="group-list">
					<li class="group-item">{{$t('targetTextOne')}}</li>
					<li class="group-item">{{$t('targetTextTwo')}}</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.services {
	background: #02899c;
	color: #fff;
	line-height: 1.4;
	padding: 7.5rem 0 5.6rem;
	@media (max-width: 1280px) {
		padding: 6.8rem 0 5.1rem;
	}
	@media (max-width: 991px) {
		padding: 6rem 0 4.5rem;
	}
	@media (max-width: 768px) {
		padding: 5.3rem 0 3.9rem;
	}
	@media (max-width: 479px) {
		padding: 4.5rem 0 3.4rem;
	}
	h3 {
		font-size: 4.4rem;
		line-height: 1.4;
		font-weight: 400;
		@media (max-width: 1280px) {
			font-size: 3.9rem;
		}
		@media (max-width: 991px) {
			font-size: 3.5rem;
		}
		@media (max-width: 768px) {
			font-size: 3.1rem;
		}
		@media (max-width: 479px) {
			font-size: 2.6rem;
		}
	}
	.program {
		&-list {
			display: flex;
			flex-wrap: wrap;
			margin-top: 4.8rem;
			@media (max-width: 1280px) {
				margin-top: 4.3rem;
			}
			@media (max-width: 991px) {
				margin-top: 3.8rem;
			}
			@media (max-width: 768px) {
				margin-top: 3.3rem;
			}
			@media (max-width: 479px) {
				margin-top: 2.9rem;
			}
		}
		&-item {
			width: 50%;
			display: flex;
			padding: 0 1.4rem 9.6rem;
			@media (max-width: 1280px) {
				padding: 0 1.2rem 8.7rem;
			}
			@media (max-width: 991px) {
				padding: 0 1.1rem 7.7rem;
			}
			@media (max-width: 768px) {
				width: 100%;
				padding: 0 0 4rem;
			}
			@media (max-width: 479px) {
				flex-wrap: wrap;
			}
			img {
				width: 8.4rem;
				display: block;
				height: auto;
				@media (max-width: 1280px) {
					width: 8rem;
				}
				@media (max-width: 991px) {
					width: 7.6rem;
				}
				@media (max-width: 768px) {
					width: 7.2rem;
				}
				@media (max-width: 479px) {
					width: 6.8rem;
				}
			}
		}
	}
	p {
		box-sizing: border-box;
		max-width: 568px;
		padding: 3.2rem 0 0 1.8rem;
		font-size: 2.3rem;
		line-height: 1.25;
		font-weight: 500;
		@media (max-width: 1280px) {
			font-size: 2.1rem;
			padding: 2.9rem 0 0 1.6rem;
		}
		@media (max-width: 991px) {
			font-size: 2rem;
			padding: 2.6rem 0 0 1.5rem;
		}
		@media (max-width: 768px) {
			font-size: 1.9rem;
			padding: 2.2rem 0 0 1.3rem;
		}
		@media (max-width: 479px) {
			font-size: 1.8rem;
			padding: 1.9rem 0 0;
			width: 100%;
		}
	}
	.group-list {
		display: flex;
		flex-wrap: wrap;
		margin-top: 1.9rem;
		padding-left: 12px;
		@media (max-width: 1280px) {
			margin-top: 1.7rem;
		}
		@media (max-width: 991px) {
			margin-top: 1.5rem;
		}
		@media (max-width: 768px) {
			margin-top: 1.3rem;
		}
		@media (max-width: 479px) {
			margin-top: 1.1rem;
		}
		.group-item {
			width: 50%;
			box-sizing: border-box;
			list-style-type: '•';
			padding: 0 25px 10px 15px;
			font-size: 2.9rem;
			@media (max-width: 1280px) {
				font-size: 2.7rem;
			}
			@media (max-width: 991px) {
				font-size: 2.4rem;
			}
			@media (max-width: 768px) {
				font-size: 2.2rem;
				width: 100%;
				padding-right: 0;
			}
			@media (max-width: 479px) {
				font-size: 2rem;
			}
		}
	}
}
[dir=rtl] {
	.services {
		p {
			padding: 3.2rem 1.8rem 0 0;
		}
	}
}
</style>
