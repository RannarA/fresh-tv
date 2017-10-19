import { FreshTvPage } from './app.po';

describe('fresh-tv App', () => {
  let page: FreshTvPage;

  beforeEach(() => {
    page = new FreshTvPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
