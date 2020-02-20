<template>
  <v-navigation-drawer
    class="deep-purple accent-4"
    dark
    app
    :value="open"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          メインメニュー
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item
      v-for="menu in menus"
      :key="menu.name"
      link
    >
      <v-list-item-icon>
        <v-icon>{{ menu.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        {{ menu.title }}
      </v-list-item-content>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script lang="ts">
import {Vue, Prop, Component} from 'vue-property-decorator';

interface Menu {
  to: string;
  title: string;
  icon: string;
}

@Component
export default class Drawer extends Vue {
  @Prop()
  public open: boolean = false;

  public menus: Menu[] = [
    {
      to: '#',
      title: 'テスト',
      icon: 'mdi-alarm'
    }
  ]
}
</script>
