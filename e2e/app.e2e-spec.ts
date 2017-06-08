import { UsersProjectPage } from './app.po';

describe('users-project App', () => {
  let page: UsersProjectPage;

  beforeEach(() => {
    page = new UsersProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
