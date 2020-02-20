<template>
  <v-app-bar
    color="deep-purple accent-4"
    dark
    app
  >
    <v-app-bar-nav-icon @click.stop="openNavigationDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>アプリケーションバー</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import {Vue, Emit, Component} from 'vue-property-decorator';

@Component
export default class Bar extends Vue {
  @Emit()
  openDrawer() {}

  public openNavigationDrawer() {
    this.openDrawer();
  }
}
</script>
