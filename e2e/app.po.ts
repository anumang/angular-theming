import { browser, by, element } from 'protractor';
import { Locator } from 'protractor/built/locators';

export class AngularThemingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1') as Locator).getText();
  }
}
