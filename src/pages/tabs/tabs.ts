import { Component } from '@angular/core';

import { AboutPage } from '../forecast/forecast';
import { ContactPage } from '../uv-index/uv-index';
import { HomePage } from '../current-weather/current-weather';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
