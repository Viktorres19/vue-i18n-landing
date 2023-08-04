<script setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const formData = reactive({
  vendorName: '',
  crTradeLicenseNumber: '',
  name: '',
  phoneNumber: '',
  email: '',
  position: ''
})

const rules = {
  vendorName: { required },
  crTradeLicenseNumber: { required },
  name: { required },
  phoneNumber: { required },
  email: { required },
  position: { required }
}

const v$ = useVuelidate(rules, formData)
const submitForm = async () => {
  await v$.value.$validate()
  if (v$.value.$error) return
  console.log('Submitted')
}
</script>

<template>
  <section class="register">
    <img alt="register overlay" class="register__overlay" src="@/assets/img/register-bg.png">
    <div class="container">
      <form class="register-block" @submit.prevent="submitForm">
        <h2>{{$t('registerYourInterest')}}</h2>
        <div class="vendor-block">
          <h3>
            {{$t('vendorInformation')}}
          </h3>
          <div class="register-block__container">
            <div class="register-block__row">
              <div class="register-block__col">
                <input type="text" :placeholder="$t('vendorName')" v-model="formData.vendorName">
	              <div class="register-block__error" v-if="v$.vendorName.$error">{{$t('errorOne')}}</div>
              </div>
              <div class="register-block__col">
                <input type="text" :placeholder="$t('crTradeLicenseNumber')" v-model="formData.crTradeLicenseNumber">
	              <div class="register-block__error" v-if="v$.vendorName.$error">{{$t('errorTwo')}}</div>
              </div>
              <div class="register-block__col">
                <input type="text" :placeholder="$t('yearsOfExperience')">
              </div>
              <div class="register-block__col">
                <input type="text" :placeholder="$t('websiteUrl')">
              </div>
            </div>
          </div>
        </div>
        <div class="provide-block">
          <h3>
            {{$t('servicesProvided')}}
          </h3>
          <div class="checkboxes">
            <div class="checkboxes__row">
              <div class="checkboxes__col">
                <label>
                  <input type="checkbox">
                  <span>{{$t('it')}}</span>
                </label>
              </div>
              <div class="checkboxes__col">
                <label>
                  <input type="checkbox">
                  <span>{{$t('hr')}}</span>
                </label>
              </div>
              <div class="checkboxes__col">
                <label>
                  <input type="checkbox">
                  <span>{{$t('accounting')}}</span>
                </label>
              </div>
              <div class="checkboxes__col">
                <label>
                  <input type="checkbox">
                  <span>{{$t('consultation')}}</span>
                </label>
              </div>
              <div class="checkboxes__col">
                <label>
                  <input type="checkbox">
                  <span>{{$t('marketing')}}</span>
                </label>
              </div>
              <div class="checkboxes__col">
                <label>
                  <input type="checkbox">
                  <span>{{$t('legal')}}</span>
                </label>
              </div>
              <div class="checkboxes__col">
                <label>
                  <input type="checkbox">
                  <span>{{$t('logistic')}}</span>
                </label>
              </div>
              <div class="checkboxes__col">
                <label>
                  <input type="checkbox">
                  <span>{{$t('realState')}}</span>
                </label>
              </div>
              <div class="checkboxes__col">
                <label>
                  <input type="checkbox">
                  <span>{{$t('management')}}</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="coverage-block">
          <h3>
            {{$t('serviceCoverage')}}
          </h3>
          <div class="checkboxes">
            <div class="checkboxes__row">
              <div class="checkboxes__col">
                <label>
                  <input type="checkbox">
                  <span>{{$t('central')}}</span>
                </label>
              </div>
              <div class="checkboxes__col">
                <label>
                  <input type="checkbox">
                  <span>{{$t('southern')}}</span>
                </label>
              </div>
              <div class="checkboxes__col">
                <label>
                  <input type="checkbox">
                  <span>{{$t('eastern')}}</span>
                </label>
              </div>
              <div class="checkboxes__col">
                <label>
                  <input type="checkbox">
                  <span>{{$t('western')}}</span>
                </label>
              </div>
              <div class="checkboxes__col">
                <label>
                  <input type="checkbox">
                  <span>{{$t('northern')}}</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-block">
          <h3>
            {{$t('pointOfContact')}}
          </h3>
          <div class="register-block__container">
            <div class="register-block__row">
              <div class="register-block__col">
                <input type="text" :placeholder="$t('name')">
	              <div class="register-block__error" v-if="v$.vendorName.$error">{{$t('errorThree')}}</div>
              </div>
              <div class="register-block__col">
                <input type="text" :placeholder="$t('phoneNumber')">
	              <div class="register-block__error" v-if="v$.vendorName.$error">{{$t('errorFour')}}</div>
              </div>
              <div class="register-block__col">
                <input type="text" :placeholder="$t('email')">
	              <div class="register-block__error" v-if="v$.vendorName.$error">{{$t('errorFive')}}</div>
              </div>
              <div class="register-block__col">
                <input type="text" :placeholder="$t('position')">
	              <div class="register-block__error" v-if="v$.vendorName.$error">{{$t('errorSix')}}</div>
              </div>
            </div>
          </div>
        </div>
        <button type="submit">{{$t('submit')}}</button>
      </form>
    </div>
  </section>
</template>

<style lang="scss">
.register {
  background-color: #00a7bf;
  color: #fff;
  padding: 4.3rem 0 9.6rem;
	position: relative;
	overflow: hidden;
	&__overlay {
		position: absolute;
		left: 50%;
		top: 0;
		transform: translateX(-50%);
		min-width: 2273px;
		width: 100%;
		height: 100%;
		z-index: 1;
	}
  @media (max-width: 1280px) {
    padding: 3.9rem 0 8.7rem;
  }
  @media (max-width: 991px) {
    padding: 3.5rem 0 7.7rem;
  }
  @media (max-width: 768px) {
    padding: 3rem 0 6.7rem;
  }
  @media (max-width: 479px) {
    padding: 2.6rem 0 5.8rem;
  }
  .container {
    max-width: 1590px;
	  position: relative;
	  z-index: 2;
  }
  &-block {
    max-width: 1228px;
    h2 {
      font-size: 4.4rem;
      font-weight: 500;
      @media (max-width: 1280px) {
        font-size: 4rem;
      }
      @media (max-width: 991px) {
        font-size: 3.5rem;
      }
      @media (max-width: 768px) {
        font-size: 3rem;
      }
      @media (max-width: 479px) {
        font-size: 2.6rem;
      }
    }
    h3 {
      font-size: 1.7rem;
      @media (max-width: 991px) {
        font-size: 1.6rem;
      }
    }
    &__container {
      overflow: hidden;
    }
    &__row {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -1.3rem;
	    @media (max-width: 1280px) {
		    margin: 0 -1.2rem;
	    }
	    @media (max-width: 991px) {
		    margin: 0 -1.1rem;
	    }
	    @media (max-width: 768px) {
		    margin: 0;
	    }
    }
    &__col {
      width: 50%;
      box-sizing: border-box;
      padding: 0 1.3rem 2.1rem;
	    @media (max-width: 1280px) {
		    padding: 0 1.2rem 1.9rem;
	    }
	    @media (max-width: 991px) {
		    padding: 0 1.1rem 1.7rem;
	    }
	    @media (max-width: 768px) {
		    width: 100%;
		    padding: 0 0 1.5rem;
	    }
      input {
        display: block;
        width: 100%;
        border-radius: 12px;
        border: none;
        padding: 14px 22px;
        background-color: #fff;
        font-size: 1.5rem;
        font-weight: 500;
        outline: none;
        color: #999;
        &:focus-visible {
          outline: none;
        }
        &::placeholder {
          color: inherit;
          opacity: 1;
        }
        @media (max-width: 1280px) {
          font-size: 1.4rem;
        }
        @media (max-width: 479px) {
          font-size: 1.3rem;
        }
      }
    }
    &__error {
      color: deeppink;
      padding: 5px 22px;
      font-size: 1.5rem;
      @media (max-width: 1280px) {
        font-size: 1.4rem;
      }
      @media (max-width: 479px) {
        font-size: 1.3rem;
      }
    }
    .checkboxes {
      &__row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }
      &__col {
        width: 20%;
        box-sizing: border-box;
        padding: 0 5px 10px 0;
	      @media (max-width: 1280px) {
		      width: 25%;
	      }
	      @media (max-width: 991px) {
		      width: 33.33%;
	      }
	      @media (max-width: 768px) {
		      width: 50%;
	      }
	      @media (max-width: 479px) {
		      width: 100%;
	      }
        label {
          display: flex;
          align-items: flex-start;
          input[type="checkbox"] {
            width: 19px;
            height: 19px;
            border-radius: 2px;
            border-image-width: 0px !important;
            background-color: transparent;
            position: relative;
            cursor: pointer;
            &:before {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              width: 19px;
              height: 19px;
              background-color: #fff;
              border-radius: 2px;
            }
            &:after {
              content: '';
              position: absolute;
              left: 2px;
              top: 2px;
              width: 15px;
              height: 15px;
              background-color: #00a7bf;
              border-radius: 2px;
              opacity: 0;
              transition: opacity .3s ease;
            }
            &:checked {
              &:after {
                opacity: 1;
              }
            }
          }
          span {
            padding-left: 20px;
            font-size: 1.9rem;
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
        }
      }
    }
    .vendor-block {
      margin-top: 2.6rem;
      @media (max-width: 1280px) {
        font-size: 2.4rem;
      }
      @media (max-width: 991px) {
        font-size: 2.1rem;
      }
      @media (max-width: 768px) {
        font-size: 1.8rem;
      }
      @media (max-width: 479px) {
        font-size: 1.6rem;
      }
      h3 {
        margin-bottom: 12px;
      }
    }
    .provide-block {
      margin-top: 2.4rem;
      @media (max-width: 1280px) {
        margin-top: 2.2rem;
      }
      @media (max-width: 991px) {
        margin-top: 2rem;
      }
      @media (max-width: 768px) {
        margin-top: 1.7rem;
      }
      @media (max-width: 479px) {
        margin-top: 1.5rem;
      }
      h3 {
        margin-bottom: 14px;
      }
    }
    .coverage-block {
      margin-top: 2.4rem;
      @media (max-width: 1280px) {
        margin-top: 2.1rem;
      }
      @media (max-width: 991px) {
        margin-top: 1.9rem;
      }
      @media (max-width: 768px) {
        margin-top: 1.7rem;
      }
      @media (max-width: 479px) {
        margin-top: 1.4rem;
      }
      h3 {
        margin-bottom: 9px;
      }
    }
    .contact-block {
      margin-top: 5.2rem;
      @media (max-width: 1280px) {
        margin-top: 4.7rem;
      }
      @media (max-width: 991px) {
        margin-top: 4.2rem;
      }
      @media (max-width: 768px) {
        margin-top: 3.6rem;
      }
      @media (max-width: 479px) {
        margin-top: 3.1rem;
      }
      h3 {
        margin-bottom: 9px;
      }
    }
  }
  button {
    display: block;
    margin: 8px 0 0 auto;
    width: 100%;
    max-width: 592px;
    background-color: #005f66;
    color: #fff;
    font-size: 2.4rem;
    line-height: 1;
    font-weight: 500;
    border-radius: 12px;
    padding: 8px 10px;
    border: none;
    cursor: pointer;
    opacity: 1;
    transition: opacity .3s ease;
    @media (max-width: 1280px) {
      font-size: 2.3rem;
    }
    @media (max-width: 991px) {
      font-size: 2.2rem;
    }
    @media (max-width: 768px) {
      font-size: 2.1rem;
      max-width: 100%;
    }
    @media (max-width: 479px) {
      font-size: 1.9rem;
    }
    &:hover {
      opacity: .9;
    }
  }
}
[dir=rtl] .register-block .checkboxes__col label span {
  padding-left: 0;
  padding-right: 20px;
}
</style>
