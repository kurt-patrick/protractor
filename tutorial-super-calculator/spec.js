describe('Protractor Demo App', function() {

  /*
   * https://www.protractortest.org/#/tutorial
   */

  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));

  // Here, we've pulled the navigation out into a beforeEach() function which is run before every it() block
  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', function() {
    enterNumbersAndValidate(1, 2, '3');
  });

  it('should add four and six', function() {
    enterNumbersAndValidate(4, 6, '10');
  });  

  it('should read the value from an input', function() {
    firstNumber.sendKeys(1);
    expect(firstNumber.getAttribute('value')).toEqual('1');
  });

  function enterNumbersAndValidate(first, second, expected) {
    firstNumber.sendKeys(first);
    secondNumber.sendKeys(second);
    goButton.click();
    expect(latestResult.getText()).toEqual(expected);
  }

});