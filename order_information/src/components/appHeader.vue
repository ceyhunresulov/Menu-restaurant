<template>
  <header :class="header5">
    <nav class="nav__top">
      <ul class="nav__top--list">
        <li class="nav__top--item">
          <router-link class="nav__top--link" :to="{ name: 'Home' }"
            >Ana sehife</router-link
          >
        </li>
        <li class="nav__top--item">
          <router-link class="nav__top--link" :to="{ name: 'Orders' }"
            >sifarişlər</router-link
          >
        </li>
        <li class="nav__top--item">
          <router-link class="nav__top--link" :to="{ name: 'AddOrders' }"
            >sifariş əlavə et</router-link
          >
        </li>
        <li class="nav__top--item">
          <router-link class="nav__top--link" :to="{ name: 'AdminPanel' }"
            >Menu</router-link
          >
        </li>
      </ul>
    </nav>
    <div class="logo">
      <img class="logo__img" src="@/assets/img/logo.png" alt="" />
    </div>
  </header>
</template>
<script>
export default {};
</script>
