import { browser, element, by, ElementFinder, ElementArrayFinder } from 'protractor';

export class PageObject {
  navigateTo() {
    return browser.get('/');
  }

  getTitel() {
    return element(by.tagName('h1')).getText();
  }

  getLadeBenutzerButton() {
    return element(by.name('loadBtn'));
  }

  getLimitEingabeFeld() {
    return element(by.name('maxUser'));
  }

  getUserItem(indexOfItem = 0): ElementFinder {
    return element.all(by.className('portfolio-item')).get(indexOfItem);
  }

  getUserItems(): ElementArrayFinder {
    return element.all(by.className('portfolio-item'));
  }

  getUserSelektiertInfo() {
    return element(by.css('h1>p.small'));
  }
}
