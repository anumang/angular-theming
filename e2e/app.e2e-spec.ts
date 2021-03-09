import { AngularThemingPage } from './app.po';

describe('angular-theming App', () => {
  let page: AngularThemingPage;

  beforeEach(() => {
    page = new AngularThemingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
