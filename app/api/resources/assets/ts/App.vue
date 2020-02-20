<template>
  <v-app>
    <NavDrawer :open="open_drawer" />
    <NavBar @open-drawer="openDrawer" />
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import NavBar from './components/Navigation/Bar.vue';
import NavDrawer from './components/Navigation/Drawer.vue';

@Component({
  components: {
    NavBar,
    NavDrawer
  },
})
export default class App extends Vue {
  public open_drawer: boolean = false;

  public openDrawer() {
    this.open_drawer = !this.open_drawer;
  }
}
</script>
