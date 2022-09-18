import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { environment } from '@env/environment';

@Injectable()
export class PageTitleService extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    const appName = environment.appName;

    if (title) {
      this.title.setTitle(`${appName} - ${title}`);
    } else {
      this.title.setTitle(appName);
    }
  }
}
