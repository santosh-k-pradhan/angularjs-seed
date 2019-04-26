'use strict';

describe('myApp module', function() {

  beforeEach(module('myApp'));

  describe('Home controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var HomeCtrl = $controller('HomeCtrl');
      expect(HomeCtrl).toBeDefined();
    }));

  });
});