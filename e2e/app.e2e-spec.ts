import { AnuglarTestingPage } from './app.po';

describe('anuglar-testing App', () => {
  let page: AnuglarTestingPage;

  beforeEach(() => {
    page = new AnuglarTestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
