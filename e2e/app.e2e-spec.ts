import { FoodLoggerPage } from './app.po';

describe('food-logger App', function() {
  let page: FoodLoggerPage;

  beforeEach(() => {
    page = new FoodLoggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
