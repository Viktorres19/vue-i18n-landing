<script setup>
import {useI18n} from 'vue-i18n'
import { reactive } from 'vue'

const { locale } = useI18n({useScope: 'global'})

const htmlTag = document.documentElement
if (locale.value === 'ar') {
  htmlTag.setAttribute('dir', 'rtl')
}
const switchLang = () => {
  locale.value === 'ar' ? locale.value = 'en' : locale.value = 'ar'
  localStorage.setItem('lang', locale.value)
  locale.value === 'ar' ? htmlTag.setAttribute('dir', 'rtl') : htmlTag.setAttribute('dir', 'ltr')
}

const appData = reactive({
	isMenuOpened: false
})

const openMenu = () => {
	appData.isMenuOpened = !appData.isMenuOpened
}

const menuList = [
	"meetTheKingdom",
	"investInSaudiArabia",
	"startYourBusiness",
	"economicHighlights",
	"media",
	"about"
]

let currentFontSize = 16
const changeFontSize = (increase) => {
	const newSize = currentFontSize + increase
	currentFontSize = Math.max(Math.min(newSize, 20), 16)
	htmlTag.style.fontSize = `${currentFontSize}px`
}
</script>

<template>
<header class="header">
<div class="container">
	<div class="header-inner">
		<div class="header-logo__wrapper">
			<a class="header-logo">
				<img alt="Logo" src="@/assets/img/logo.png">
			</a>
		</div>
		<div class="header-burger">
			<div @click="openMenu" :class="['header-burger__inner', appData.isMenuOpened ? 'active' : '']"><span></span></div>
		</div>
		<div :class="['header-navigation', appData.isMenuOpened ? 'active' : '']">
			<div class="header-links">
				<div class="header-links__scale">
					<a class="scale-down" @click.prevent="changeFontSize(-1)" href="#">
						{{$t('headerNav[0].text')}}
					</a>
					<a class="scale-up" @click.prevent="changeFontSize(1)" href="#">
						{{$t('headerNav[1].text')}}
					</a>
				</div>
				<a @click="switchLang" class="header-links__lang" href="#">
					{{$t('headerNav[2].text')}} &nbsp;|&nbsp;{{$t('headerNav[3].text')}}
				</a>
				<a href="#">
					{{$t('headerNav[4].text')}}
				</a>
				<a href="#">
					{{$t('headerNav[5].text')}}
				</a>
				<a href="#">
					<img width="87" height="58" alt="2030" src="@/assets/img/logo-digit.png">
				</a>
				<a href="#">
					<img width="227" height="65" alt="Ministry logo" src="@/assets/img/logo-digit.png">
				</a>
			</div>
			<nav class="header-nav">
				<ul>
					<li v-for="item in menuList" :key="item"><a href="#">{{$t(`mainMenu.${item}`)}}<img alt="arrow" src="@/assets/img/menu-arrow.svg"></a></li>
				</ul>
			</nav>
		</div>
	</div>
</div>
</header>
</template>


<style lang="scss" scoped>
.header {
	position: absolute;
	z-index: 9999;
	left: 0;
	top: 0;
	width: 100%;
	background-color: transparent;
	padding-top: 4.8vw;
	&-inner {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		@media (max-width: 991px) {
			flex-wrap: wrap;
			align-items: stretch;
		}
	}
	&-logo {
		display: block;
		text-decoration: none;
		opacity: 1;
		transition: opacity .3s ease;
		cursor: pointer;
		&:hover {
			text-decoration: none;
			opacity: .8;
		}
		img {
			display: block;
			width: 100%;
			height: auto;
		}
		&__wrapper {
			width: 164px;
			min-width: 164px;
			@media (max-width: 991px) {
				width: 100px;
				min-width: 100px;
			}
		}
	}
	&-burger {
		display: none;
		@media (max-width: 991px) {
			display: flex;
			justify-content: flex-end;
			align-items: flex-end;
			flex-grow: 2;
		}
		&__inner {
			width: 42px;
			height: 42px;
			position: relative;
			cursor: pointer;
			span, &:before, &:after {
				width: 100%;
				height: 6px;
				background: #fff;
				position: absolute;
				left: 0;
				border-radius: 4px;
			}
			&:before, &:after {
				content: '';
				transition: all .3s ease;
			}
			&:before {
				bottom: 0;
			}
			&:after {
				top: 0;
			}
			span {
				display: block;
				top: 50%;
				transform: translateY(-50%);
			}
			&.active span {
				display: none;
			}
			&.active:before, &.active:after {
				top: 50%;
				left: 50%;
			}
			&.active:before {
				transform: translate(-50%, -50%) rotate(45deg);
			}
			&.active:after {
				transform: translate(-50%, -50%) rotate(-45deg);
			}
		}
	}
	&-navigation {
		@media (max-width: 991px) {
			display: none;
			margin-top: 10px;
			width: 100%;
			background-color: #3e8263;
			padding: 10px;
			border: 1px solid #fff;
			&.active {
				display: block;
			}
		}
	}
	&-links {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding-top: 5px;
		flex-wrap: wrap;
		&__scale {
			display: flex;
			a {
				display: block;
			}
		}
		@media (max-width: 768px) {
			flex-direction: column-reverse;
			align-items: flex-end;
			justify-content: flex-start;
		}
		.header-links__lang {
			padding: 4px 16px;
			border-radius: 20px;
			line-height: 1;
			font-size: 1rem;
			background-color: #005f66;
			@media (max-width: 768px) {
				font-size: .9rem;
			}
		}
		a {
			color: #fff;
			text-decoration: none;
			opacity: 1;
			line-height: 1;
			text-transform: uppercase;
			font-size: 1.4rem;
			@media (max-width: 768px) {
				margin-bottom: 10px;
			}
			&:hover {
				text-decoration: none;
				transition: opacity .3s ease;
				opacity: .8;
			}
			@media (max-width: 1280px) {
				font-size: 1.3rem;
			}
			@media (max-width: 479px) {
				font-size: 1.2rem;
			}
		}
		> a {
			display: block;
			margin-left: 2vw;
			@media (max-width: 768px) {
				margin-left: 0;
			}
			&:last-of-type, &:nth-last-child(2) {
				margin-left: 3.3vw;
				@media (max-width: 768px) {
					margin-left: 0;
				}
			}
			&:nth-child(2) {
				margin-left: 1.5vw;
				@media (max-width: 768px) {
					margin-left: 0;
				}
			}
		}
	}
	&-nav {
		padding-top: 2.9vw;
		ul {
			list-style: none;
			display: flex;
			justify-content: flex-end;
			flex-wrap: wrap;
			@media (max-width: 768px) {
				flex-direction: column;
				align-items: flex-end;
			}
			li {
				margin-left: 2.4vw;
				margin-bottom: 10px;
				@media (max-width: 768px) {
					margin-left: 0;
					margin-bottom: 0;
				}
				&:first-of-type {
					margin-left: 0;
				}
				@media (max-width: 991px) {
					margin-left: 0;
					margin-bottom: 0;
				}
				a {
					padding-right: 19px;
					text-transform: uppercase;
					font-size: 1.2rem;
					line-height: 1;
					color: #fff;
					text-decoration: none;
					position: relative;
					opacity: 1;
					transition: opacity .3s ease;
					&:hover {
						text-decoration: none;
						opacity: .8;
					}
					@media (max-width: 991px) {
						font-size: 1.1rem;
						display: block;
						padding: 10px 30px 10px 10px;
					}
					img {
						content: '';
						position: absolute;
						right: 0;
						top: 4px;
						width: 12px;
						height: auto;
						@media (max-width: 991px) {
							right: 5px;
						}
						@media (max-width: 768px) {
							top: 12px;
						}
					}
				}
			}
		}
	}
}
[dir=rtl] .header-nav ul li a {
	padding-right: 0;
	padding-left: 19px;
}
[dir=rtl] .header-nav ul li a img {
	right: 100%;
	transform: translateX(100%);
}
[dir=rtl] .header-nav ul li {
	margin-left: 0;
	margin-right: 2.4vw;
	&:first-of-type {
		margin-right: 0;
	}
}
[dir=rtl] .header-links > a:nth-child(2) {
	margin-left: 0;
	margin-right: 1.5vw;
}
[dir=rtl] .header-links > a {
	margin-left: 0;
	margin-right: 2vw;
}
[dir=rtl] .header-links > a:last-of-type, [dir=rtl] .header-links > a:nth-last-child(2) {
	margin-left: 0;
	margin-right: 3.3vw;
}
</style>
