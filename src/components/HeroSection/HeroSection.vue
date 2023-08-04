<script setup>
</script>

<template>
    <div class="hero-section">
        <img class="hero-back" alt="Hero Background" src="@/assets/img/header-bg.jpg">
        <div class="top-layer">
            <div class="top-layer__adv">
                <div class="adv-block">
                    <h2>{{$t('advHeader')}}</h2>
                    <p>{{$t('advText')}}</p>
                    <a href="#" class="button">{{$t('advButton.text')}}</a>
                </div>
            </div>
            <div class="top-layer__content">
                <div class="container">
                    <div class="block-info">
                        <div class="block-info__text">
                            <h2>{{$t('contentHeader')}}</h2>
                            <p>{{$t('contentText')}}</p>
                        </div>
                        <div class="block-info__img">
                            <img alt="Man" src="@/assets/img/man.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.hero-section {
    position: relative;
    z-index: 2;
    .hero-back {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        width: 100%;
        height: 100%;
    }
    .top-layer {
        z-index: 3;
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
        &__adv {
            flex-grow: 2;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 66vw;
            @media (max-width: 991px) {
                padding: 180px 0 30px;
            }
            .adv-block {
                margin-top: 10.5vw;
                max-width: 1600px;
                padding: 7px;
                box-sizing: border-box;
                text-align: center;
                @media (max-width: 991px) {
                    margin-top: 0;
                    padding: 7px 15px;
                }
                h2 {
                    font-size: 2.8rem;
                    line-height: 1.24;
                    @media (max-width: 1280px) {
                        font-size: 2.6rem;
                    }
                    @media (max-width: 991px) {
                        font-size: 2.4rem;
                    }
                    @media (max-width: 768px) {
                        font-size: 2.2rem;
                    }
                    @media (max-width: 479px) {
                        font-size: 2rem;
                    }
                }
                p {
                    font-size: 1.4rem;
                    line-height: 1.2;
                    margin: 20px 0;
                    @media (max-width: 768px) {
                        font-size: 1.3rem;
                    }
                }
                .button {
                    display: inline-block;
                    font-size: 2.7rem;
                    line-height: 1;
                    border-radius: 39px;
                    background-color: #00a7bf;
                    padding: 1.1rem 2.9rem;
                    color: #fff;
                    text-decoration: none;
                    margin-top: 16px;
                    @media (max-width: 1280px) {
                        font-size: 2.5rem;
                        padding: 1rem 2.6rem;
                    }
                    @media (max-width: 991px) {
                        font-size: 2.3rem;
                        padding: .9rem 2.4rem;
                    }
                    @media (max-width: 768px) {
                        font-size: 2.1rem;
                        padding: .7rem 2.1rem;
                    }
                    @media (max-width: 479px) {
                        font-size: 1.9rem;
                        padding: .6rem 1.8rem;
                    }
                }
            }
        }
        &__content {
            padding: 6.5vw 0 6.1vw;
            width: 100%;
            bottom: 0;
            left: 0;
            background-color: rgba(15, 113, 151, .67);
            @media (max-width: 768px) {
                padding: 10px 0 6.1vw;
            }
            .container {
                height: 100%;
            }
            .block-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 100%;
                @media (max-width: 768px) {
                    flex-direction: column-reverse;
                    justify-content: center;
                }
                &__img {
                    width: 43.1%;
                    position: relative;
                    height: 100%;
                    @media (max-width: 768px) {
                        width: 100%;
                    }
                    img {
                        position: absolute;
                        width: 100%;
                        height: auto;
                        left: 0;
                        top: 30%;
                        transform: translateY(-50%);
                        @media (max-width: 768px) {
                            position: relative;
                            display: block;
                            max-width: 320px;
                            top: -20px;
                            transform: translateY(0);
                            margin: 0 auto;
                        }
                    }
                }
                &__text {
                    width: 56.9%;
                    box-sizing: border-box;
                    padding-right: 10px;
                    @media (max-width: 768px) {
                        width: 100%;
                    }
                    h2, p {
                        font-size: 1.9rem;
                        line-height: 1.24;
                        @media (max-width: 1280px) {
                            font-size: 1.8rem;
                        }
                        @media (max-width: 991px) {
                            font-size: 1.7rem;
                        }
                        @media (max-width: 768px) {
                            font-size: 1.6rem;
                        }
                        @media (max-width: 479px) {
                            font-size: 1.5rem;
                        }
                    }
                    h2 {
                        font-weight: 700;
                        max-width: 852px;
                        margin-bottom: 2.6rem;
                        @media (max-width: 1280px) {
                            margin-bottom: 2.4rem;
                        }
                        @media (max-width: 991px) {
                            margin-bottom: 2.1rem;
                        }
                        @media (max-width: 768px) {
                            margin-bottom: 1.8rem;
                        }
                        @media (max-width: 479px) {
                            margin-bottom: 1.6rem;
                        }
                    }
                }
            }
        }
    }
}
[dir=rtl] {
    .hero-section {
        .top-layer {
            &__content {
                .block-info {
                    &__text {
                        padding-left: 10px;
                        padding-right: 0;
                    }
                }
            }
        }
    }
}
</style>
