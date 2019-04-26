'use strict';

describe('myAppmodule', function() {

  beforeEach(module('myApp'));

  describe('About controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var AboutCtrl = $controller('AboutCtrl');
      expect(AboutCtrl).toBeDefined();
    }));

  });
});