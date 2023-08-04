<script setup>
</script>

<template>
    <div class="footer">
        <div class="container">
            <div class="footer-block">
                <div class="footer-block__logo">
                    <a href="#">
                        <img alt="Miza logo" src="@/assets/img/logo-footer.png">
                    </a>
                </div>
                <nav class="footer-block__nav">
                    <ul>
                        <li><a href="#">{{$t('meetTheKingdom')}}</a></li>
                        <li><a href="#">{{$t('investInSaudiArabia')}}</a></li>
                        <li><a href="#">{{$t('investmentGuide')}}</a></li>
                        <li><a href="#">{{$t('mediaCenter')}}</a></li>
                    </ul>
                </nav>
                <nav class="footer-block__sectors">
                    <ul>
                        <li class="item--bold">{{$t('sectorsNIndustries')}}</li>
                        <li><a href="#">{{$t('chemicals')}}</a></li>
                        <li><a href="#">{{$t('informationAndTechnology')}}</a></li>
                        <li><a href="#">{{$t('energy')}}</a></li>
                        <li class="item--blue"><a href="#">{{$t('exploreMore')}}</a></li>
                    </ul>
                </nav>
                <nav class="footer-block__programs">
                    <ul>
                        <li class="item--bold">{{$t('programsNIncentives')}}</li>
                        <li><a href="#">{{$t('regionalHeadQuarters')}}</a></li>
                        <li><a href="#">{{$t('incentives')}}</a></li>
                        <li><a href="#">{{$t('ministryOfInvestment')}}</a></li>
                        <li><a href="#">{{$t('vision2030')}}</a></li>
                    </ul>
                </nav>
                <ul class="footer-block__socials">
                    <li class="item--blue">{{$t('followUs')}}</li>
                    <li><a href="#">
                        <img alt="Twitter icon" src="@/assets/img/twitter-icon.svg">
                    </a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    background-color: #fff;
    color: #606060;
    padding: 3.8rem 0 2.6rem;
    @media (max-width: 1280px) {
        padding: 3.4rem 0 2.4rem;
    }
    @media (max-width: 991px) {
        padding: 3rem 0 2.1rem;
    }
    @media (max-width: 768px) {
        padding: 2.6rem 0 1.8rem;
    }
    @media (max-width: 479px) {
        padding: 2.3rem 0 1.6rem;
    }
    &-block {
        display: flex;
        align-items: flex-start;
        font-size: 1.5rem;
        font-weight: 500;
        @media (max-width: 1280px) {
            flex-wrap: wrap;
        }
        @media (max-width: 768px) {
            font-size: 1.4rem;
        }
        nav {
            box-sizing: border-box;
        }
        ul {
            margin-top: 12px;
            box-sizing: border-box;
            padding: 0 0 0 5px;
            list-style-type: none;
            @media (max-width: 1280px) {
                margin-top: 25px;
            }
            li {
                font-weight: 500;
                margin-bottom: 15px;
                &.item--bold {
                    font-weight: 700;
                }
                &.item--blue {
                    color: #00a7bf;
                }
                a {
                    color: inherit;
                    text-decoration: none;
                    opacity: 1;
                    transition: opacity .3s ease;
                    font-weight: inherit;
                    &:hover {
                        text-decoration: none;
                        opacity: 0.9;
                    }
                }
            }
        }
        &__logo {
            width: 19.4%;
            a {
                display: block;
                width: 100%;
                max-width: 145px;
                img {
                    width: 100%;
                    height: auto;
                }
            }
            @media (max-width: 1280px) {
                width: 33.3%;
            }
            @media (max-width: 768px) {
                width: 100%;
            }
        }
        &__nav {
            width: 22.5%;
            @media (max-width: 1280px) {
                width: 33.3%;
            }
            @media (max-width: 768px) {
                width: 50%;
            }
            @media (max-width: 479px) {
                width: 100%;
            }
        }
        &__sectors {
            width: 26.8%;
            @media (max-width: 1280px) {
                width: 33.3%;
            }
            @media (max-width: 768px) {
                width: 50%;
            }
            @media (max-width: 479px) {
                width: 100%;
            }
        }
        &__programs {
            width: 19.4%;
            @media (max-width: 1280px) {
                width: 50%;
            }
            @media (max-width: 479px) {
                width: 100%;
            }
        }
        &__socials {
            width: 11.9%;
            img {
                width: 38px;
                height: auto;
            }
            @media (max-width: 1280px) {
                width: 50%;
            }
            @media (max-width: 479px) {
                width: 100%;
            }
        }
    }
}
</style>
