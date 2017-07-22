import { TESTPROJECTPage } from './app.po';

describe('test-project App', () => {
  let page: TESTPROJECTPage;

  beforeEach(() => {
    page = new TESTPROJECTPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
