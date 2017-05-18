import { WildLivePage } from './app.po';

describe('wild-live App', () => {
  let page: WildLivePage;

  beforeEach(() => {
    page = new WildLivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
