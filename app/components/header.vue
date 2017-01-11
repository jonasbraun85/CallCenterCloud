<template>
  <header class="header" style="height: 86.4px;background-color: #3064c3;"> 

    <h1 class="logo" style="width: 318.72px;">
      <router-link to="/">{{ name }}</router-link>
    </h1>
    <nav class="menu">
      <ul class="list">
         <router-link tag="li" class="item" active-class="active" v-for="item in menus" :to="item">
          <a><i :class="'dashicons dashicons-' + item.icon"></i><span>{{ item.title }}</span></a>
          <nav class="submenu" v-if="item.children">
            <ul class="list">
              <router-link tag="li" class="item" active-class="active" v-for="sub in item.children" :to="sub"><a>{{ sub.title }}</a></router-link>  
            </ul>
          </nav>
        </router-link>   
      </ul>
      <ul class="list right">
        <router-link tag="li" class="item" active-class="active" v-for="item in alrams" :to="item">
          <a><i :class="'dashicons dashicons-' + item.icon"></i><span>{{ item.title }}</span></a>
          <nav class="submenu" v-if="item.children">
            <ul class="list">
              <router-link tag="li" class="item" active-class="active" v-for="sub in item.children" :to="sub"><a>{{ sub.title }}</a></router-link>  
            </ul>
          </nav>
        </router-link>

        <li class="item">
          <a href="#">
            <span>{{ user.nickname }}</span>
            <img class="avatar" :src="user.avatar" :alt="user.nickname">
          </a>
          <nav class="submenu">
            <ul class="list">
              <li class="item"><a href="#">Edit your profile</a></li>
              <li class="item"><a href="#">Sign out</a></li>
            </ul>
          </nav>
        </li>

      </ul>
    </nav>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'header',

    computed: mapGetters({
      menus: 'topbar',
      alrams: 'alrambar',
      name: 'name',
      user: 'currentUser'
    })
  }
</script>
