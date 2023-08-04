<script setup>

</script>

<template>
  <section class="about">
    <div class="container">
        <div class="about-block">
            <h2>{{$t('aboutHeader')}}</h2>
            <p>{{$t('aboutText[0]')}}</p>
            <p>{{$t('aboutText[1]')}}</p>
        </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  background-color: #fff;
  color: #00A7BF;
  line-height: 1.4;
  padding: 9.4rem 0 8.4rem;
  @media (max-width: 1280px) {
    padding: 8.5rem 0 7.9rem;
  }
  @media (max-width: 991px) {
    padding: 7.6rem 0 7rem;
  }
  @media (max-width: 768px) {
    padding: 6.6rem 0 6.1rem;
  }
  @media (max-width: 479px) {
    padding: 5.7rem 0 5.3rem;
  }
  h2 {
    font-size: 4.4rem;
    line-height: 1.4;
    font-weight: 700;
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
  p {
    font-size: 1.9rem;
    line-height: 1.4;
    font-weight: 400;
    margin: 2.4rem 0;
    &:last-of-type {
      margin-bottom: 0;
    }
    &:first-of-type {
      margin-top: 1.9rem;
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
    }
    @media (max-width: 1280px) {
      font-size: 1.8rem;
      margin: 2.1rem 0;
    }
    @media (max-width: 991px) {
      font-size: 1.7rem;
      margin: 1.9rem 0;
    }
    @media (max-width: 768px) {
      font-size: 1.6rem;
      margin: 1.7rem 0;
    }
    @media (max-width: 479px) {
      font-size: 1.5rem;
      margin: 1.4rem 0;
    }
  }
}
</style>
