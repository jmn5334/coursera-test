describe('menuItemExist', function () {

  var menuService;
  var $httpBackend;
  var ApiBasePath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      menuService = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
    });
  });

  it('should return true', function() {
    $httpBackend.whenGET('https://jnewco13-course-5.herokuapp.com/menu_items/L16.json').respond(['Lunch']);
    var doesExist = false;
    menuService.doesMenuItemExist('L16').then(function(response) {
      doesExist = true;
    });
    $httpBackend.flush();
    expect(doesExist).toEqual(true);
  });

  it('should return false', function() {
    $httpBackend.whenGET('https://jnewco13-course-5.herokuapp.com/menu_items/L166.json').respond(500);
    var doesExist = false;
    menuService.doesMenuItemExist('L166').then(function(response) {
      doesExist = true;
    });
    $httpBackend.flush();
    expect(doesExist).toEqual(false);
  });

});