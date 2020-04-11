import { AngularInfiniteScrollingPage } from './app.po';

describe('angular-infinite-scrolling App', function() {
  let page: AngularInfiniteScrollingPage;

  beforeEach(() => {
    page = new AngularInfiniteScrollingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
