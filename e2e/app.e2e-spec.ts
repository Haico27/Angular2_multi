import { MultiPurposeAppPage } from './app.po';

describe('multi-purpose-app App', function() {
  let page: MultiPurposeAppPage;

  beforeEach(() => {
    page = new MultiPurposeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
