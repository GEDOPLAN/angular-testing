import { PageObject } from './app.po';
import { browser } from 'protractor';

describe('anuglar-testing App', () => {
  let page: PageObject;

  beforeEach(() => {
    page = new PageObject();
  });

  it('should display start page', () => {
    page.navigateTo();
    expect(page.getTitel()).toEqual('Benutzerliste');
  });

  it('should load limited users', () => {
    page.navigateTo();
    page.getLimitEingabeFeld().clear();
    page.getLimitEingabeFeld().sendKeys('2');
    page.getLadeBenutzerButton().click();
    expect(page.getUserItems().count()).toBe(2);
  });

  it('should highlight selected user', () => {
    page.navigateTo();
    page.getLadeBenutzerButton().click();
    page.getUserItem().click();

    expect(page.getUserItem().getAttribute('class')).toContain('selecteditm');
    expect(page.getUserSelektiertInfo().getText()).toContain('1');
  });
});
