<script setup>
</script>

<template>
<div class="cta">
    <div class="container">
        <div class="cta-block">
            <div class="cta-block__sign">
                {{$t('ctaSign')}}
            </div>
            <div class="cta-block__links">
                <a href="#"> {{$t('ctaLinkOne')}}</a>
                <a href="#"> {{$t('ctaLinkTwo')}}</a>
                <a href="#"> {{$t('ctaLinkThree')}}</a>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.cta {
    background-color: #026573;
    padding: 12px 0 19px;
    &-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        &__sign {
            font-size: 1.4rem;
            @media (max-width: 1280px) {
                font-size: 1.3rem;
            }
            @media (max-width: 991px) {
                font-size: 1.3rem;
                width: 100%;
            }
            @media (max-width: 768px) {
                font-size: 1.2rem;
            }
            @media (max-width: 479px) {
                font-size: 1.2rem;
            }
        }
        &__links {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-size: 1.5rem;
            color: #fff;
            flex-wrap: wrap;
            @media (max-width: 1280px) {
                font-size: 1.5rem;
            }
            @media (max-width: 991px) {
                font-size: 1.5rem;
                width: 100%;
                justify-content: flex-start;
            }
            @media (max-width: 768px) {
                font-size: 1.4rem;
            }
            @media (max-width: 479px) {
                font-size: 1.4rem;
            }
            a {
                color: inherit;
                padding-left: 40px;
                text-decoration: none;
                opacity: 1;
                transition: opacity .3s ease;
                font-size: inherit;
                @media (max-width: 991px) {
                    padding: 10px 20px 0 0;
                }
                @media (max-width: 479px) {
                    width: 100%;
                }
                &:hover {
                    opacity: .9;
                    text-decoration: none;
                }
            }
        }
    }
}
</style>
