<script setup>

</script>

<template>
	<section class="how">
		<div class="container">
        <h2>{{$t('howHeader')}}</h2>
        <p>{{$t('howText')}}</p>
    </div>
	</section>
</template>

<style lang="scss" scoped>
.how {
  background: #fff;
  color: #00a7bf;
  padding: 5.8rem 0;
  @media (max-width: 1280px) {
    padding: 5.2rem 0;
  }
  @media (max-width: 991px) {
    padding: 4.6rem 0;
  }
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
  @media (max-width: 479px) {
    padding: 3.5rem 0;
  }
  h2 {
    font-size: 3.5rem;
    font-weight: 500;
    margin-bottom: 1.1rem;
    @media (max-width: 1280px) {
      font-size: 3.2rem;
      margin-bottom: 1rem;
    }
    @media (max-width: 991px) {
      font-size: 2.8rem;
      margin-bottom: .85rem;
    }
    @media (max-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: .7rem;
    }
    @media (max-width: 479px) {
      font-size: 2.1rem;
      margin-bottom: .6rem;
    }
  }
  p {
    font-size: 2.4rem;
    font-weight: 500;
    @media (max-width: 1280px) {
      font-size: 2.1rem;
    }
    @media (max-width: 991px) {
      font-size: 1.9rem;
    }
    @media (max-width: 768px) {
      font-size: 1.7rem;
    }
    @media (max-width: 479px) {
      font-size: 1.4rem;
    }
  }
}
</style>
