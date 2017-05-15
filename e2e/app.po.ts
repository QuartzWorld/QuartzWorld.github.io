import { browser, by, element } from 'protractor';

export class WwwPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('qz-root h1')).getText();
  }
}
