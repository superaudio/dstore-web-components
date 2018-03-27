// 轮播图
import { Component, OnInit, Input } from '@angular/core';

import { environment } from '../../environments/environment';

import { AppService } from '../../services/app.service';

import { App } from '../../services/app';
import { Section } from '../../services/section';

@Component({
  selector: 'dstore-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() section: Section;
  metadataServer = environment.metadataServer;
  selectIndex = 0;

  apps: App[] = [];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService
      .getAppListByNames(this.section.apps.map(app => app.name))
      .subscribe(appList => {
        this.apps = this.section.apps.map(app => appList[app.name]);
      });
  }
}