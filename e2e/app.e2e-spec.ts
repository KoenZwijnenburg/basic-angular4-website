import { BasicAngularWebsitePage } from './app.po';

describe('basic-angular-website App', () => {
  let page: BasicAngularWebsitePage;

  beforeEach(() => {
    page = new BasicAngularWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
