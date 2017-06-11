import { EncriptacionPage } from './app.po';

describe('encriptacion App', () => {
  let page: EncriptacionPage;

  beforeEach(() => {
    page = new EncriptacionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
