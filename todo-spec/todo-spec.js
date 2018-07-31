describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('https://angularjs.org');

    // Locate the text box and send keys...
    // In this case by.model refers to matching on ng-model="todoList.todoText"
    // <input ng-model="todoList.todoText" type="text">
    element(by.model('todoList.todoText')).sendKeys('write first protractor test');

    // Locate the add button and click on it
    // <input class="btn-primary" value="add" type="submit">
    element(by.css('[value="add"]')).click();

    // Find all the todo items and assert the count
    // <li ng-repeat="todo in todoList.todos" class="ng-scope">
    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    /*
    <li ng-repeat="todo in todoList.todos" class="ng-scope">
      <label class="checkbox">
        <input ng-model="todo.done" class="ng-pristine ng-untouched ng-valid ng-empty" type="checkbox">
        <span class="done-false">write first protractor test</span>
      </label>
    </li>
    */
   todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
});

