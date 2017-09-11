import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }
  getUrl() {
    return browser.getCurrentUrl();
  }

  getTitle() {
    return element(by.css('app-root h2')).getText();
  }
  getRockImage() {
    return element(by.id('rock')).all(by.tagName('img')).get(0).getAttribute('src');
  }
  getRockButton() {
      return element(by.id('rock'));
  }

  getPcScore() {
    return element(by.css('app-root')).all(by.css('.row')).get(1).all(by.css('.hidden-xs')).get(0).getText();
  }
  getNpcScore() {
    return element(by.css('app-root')).all(by.css('.row')).get(1).all(by.css('.col-sm-6')).get(2).getText();
  }

  getPcChoice() {
      return element(by.css('app-root')).all(by.css('.row')).get(2).all(by.css('.hidden-xs')).get(0).all(by.tagName('p')).get(1).getText();
  }
  getNpcChoice() {
      return element(by.css('app-root')).all(by.css('.row')).get(2).all(by.css('.col-sm-6')).get(1).all(by.tagName('p')).get(0).getText();
  }

  getResult() {
      return element(by.css('app-root')).all(by.css('.row')).get(2).all(by.css('.col-sm-6')).get(1).all(by.tagName('p')).get(1).getText();
  }
}
