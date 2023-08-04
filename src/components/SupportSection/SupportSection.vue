<script setup>

</script>

<template>
  <section class="support">
    <img alt="support overlay" class="support__overlay" src="@/assets/img/support-overlay.png">
    <div class="support__inner">
      <div class="container">
        <div class="support__content">
          <div class="support-item">
            <div>
	            <h3>{{$t('supportHeaderOne')}}</h3>
	            <p>{{$t('supportTextOne')}}</p>
            </div>
            <div class="support-item__links support-item__links--single">
              <a href="#">
                <span>{{$t('supportLinkOne')}}</span>
                <img alt="support arrow" src="@/assets/img/support-arrow.svg">
              </a>
            </div>
          </div>
	        <div class="support-item">
		        <div>
			        <h3>{{$t('supportHeaderTwo')}}</h3>
			        <p>{{$t('supportTextTwo')}}</p>
		        </div>
		        <div class="support-item__links support-item__links--single">
			        <a href="#">
				        <span>{{$t('supportLinkTwo')}}</span>
				        <img alt="support arrow" src="@/assets/img/support-arrow.svg">
			        </a>
		        </div>
	        </div>
	        <div class="support-item">
		        <div>
			        <h3>{{$t('supportHeaderThree')}}</h3>
			        <p>{{$t('supportTextThree')}}</p>
		        </div>
		        <div class="support-item__links support-item__links--single">
			        <a href="#">
				        <span>{{$t('supportLinkThree')}}</span>
				        <img alt="support arrow" src="@/assets/img/support-arrow.svg">
			        </a>
		        </div>
	        </div>
	        <div class="support-item">
		        <div>
			        <h3>{{$t('supportHeaderFour')}}</h3>
			        <p>{{$t('supportTextFour')}}</p>
		        </div>
		        <div class="support-item__links support-item__links--multiple">
			        <a href="#">
				        <span>{{$t('supportLinkFourFirst')}}</span>
			        </a>
              <a href="#">
                <span>{{$t('supportLinkFourSecond')}}</span>
              </a>
              <a href="#">
                <span>{{$t('supportLinkFourThird')}}</span>
              </a>
		        </div>
	        </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  .support {
    position: relative;
    background-color: #fff;
    overflow: hidden;
    color: #232323;
    padding: 8.3rem 0 6.6rem;
    @media (max-width: 1280px) {
      padding: 7.5rem 0 5.9rem;
    }
    @media (max-width: 991px) {
      padding: 6.7rem 0 5.3rem;
    }
    @media (max-width: 768px) {
      padding: 5.8rem 0 4.6rem;
    }
    @media (max-width: 479px) {
      padding: 5rem 0 3.9rem;
    }
    &__overlay {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        width: 100%;
        height: 100%;
        min-width: 1920px;
        z-index: 1;
    }
    &__inner {
        position: relative;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    &__content {
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
    }
    &-item {
      width: 25%;
      box-sizing: border-box;
      padding: 0 3vw 10px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 991px) {
        width: 50%;
        padding: 0 3vw 30px 0;
      }
      @media (max-width: 479px) {
        width: 100%;
        padding: 0 3vw 20px 0;
      }
      h3 {
        font-size: 1.5rem;
        color: #026573;
        font-weight: 500;
        @media (max-width: 1280px) {
          font-size: 1.5rem;
        }
        @media (max-width: 991px) {
          font-size: 1.4rem;
        }
        @media (max-width: 768px) {
          font-size: 1.4rem;
        }
        @media (max-width: 479px) {
          font-size: 1.3rem;
        }
      }
      p {
        font-size: 1rem;
        font-weight: 500;
        padding: 10px 0 4rem;
        @media (max-width: 1280px) {
          padding: 10px 0 3.6rem;
        }
        @media (max-width: 991px) {
          padding: 10px 0 3.2rem;
        }
        @media (max-width: 768px) {
          padding: 10px 0 2.8rem;
        }
        @media (max-width: 479px) {
          padding: 10px 0 2.4rem;
        }
      }
      &__links {
        display: flex;
        a {
          position: relative;
          display: block;
          padding-bottom: 10px;
          color: #90c364;
          text-transform: uppercase;
          font-size: 1.5rem;
          font-weight: 500;
          text-decoration: none;
          opacity: 1;
          transition: opacity .3s ease;
          &:hover {
            text-decoration: none;
            opacity: .9;
          }
          @media (max-width: 1280px) {
            font-size: 1.5rem;
          }
          @media (max-width: 991px) {
            font-size: 1.4rem;
          }
          @media (max-width: 768px) {
            font-size: 1.4rem;
          }
          @media (max-width: 479px) {
            font-size: 1.3rem;
          }
        }
        &--single {
          a {
            padding-right: 32px;
            img {
              display: block;
              position: absolute;
              right: 0;
              top: 12px;
              width: 23px;
              height: 17px;
            }
          }
        }
        &--multiple {
          flex-wrap: wrap;
          a {
            span {
              line-height: 1;
              position: relative;
              padding: 0 7px;
              &:after {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                width: 1px;
                height: 100%;
                background-color: #999a9a;
              }
            }
            &:last-child {
              span {
                &:after {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
  [dir=rtl] .support-item__links--single a {
	  padding-right: 0;
	  padding-left: 32px;
  }
  [dir=rtl] .support-item__links--single a img {
	  right: 100%;
	  transform: scaleX(-1) translateX(-100%);
  }
  [dir=rtl] .support-item__links--multiple a span:after {
	  right: 100%;
  }
</style>
