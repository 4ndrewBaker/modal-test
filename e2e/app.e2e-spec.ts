import { ModalTestPage } from './app.po';

describe('modal-test App', () => {
  let page: ModalTestPage;

  beforeEach(() => {
    page = new ModalTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
