import { KitsunePublicPage } from './app.po';

describe('kitsune-public App', function() {
  let page: KitsunePublicPage;

  beforeEach(() => {
    page = new KitsunePublicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
