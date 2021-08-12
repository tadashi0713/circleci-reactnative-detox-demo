describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Should see Hello', async () => {
    await expect(element(by.id('hello_text'))).toHaveText('Hello ');
  });

  it('Should see Hello! when tap increase button', async () => {
    await element(by.id('increase_button')).tap();
    await expect(element(by.id('hello_text'))).toHaveText('Hello !');
  });

  it('Should see Hello when tap decrease button', async () => {
    await element(by.id('decrease_button')).tap();
    await expect(element(by.id('hello_text'))).toHaveText('Hello ');
  });
});
