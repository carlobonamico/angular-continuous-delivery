describe("the AppInfo controller", function() {
  var controller;
  var httpBackend;


  beforeEach(module("appInfo"));




   beforeEach(inject(function($httpBackend) {
       httpBackend = $httpBackend;
   }));


   afterEach(function() {
       httpBackend.verifyNoOutstandingExpectation();
       httpBackend.verifyNoOutstandingRequest();
   });


   beforeEach(inject(function($controller) {
     controller = $controller("AppInfoController");
   }));


  describe("by default", function() {
    describe("when there is no appInfo.json", function() {

      it("should display the version LOCAL ", function() {
        //TODO CHECK
        httpBackend.expect('GET', 'data/appInfo.json').respond(404, '');

        httpBackend.flush();

        expect(controller.app.version).toBe("LOCAL");


      });
    });
    describe("when the input appInfo.json is present", function() {
      //TODO fix position of httpBackend

      it("should display the version ", function() {

        httpBackend.expect('GET', 'data/appInfo.json')
            .respond({
                "version": "0.0.2",
                "user" : "validuser"
            });
        httpBackend.flush();

        expect(controller.app.version).toBe("0.0.2");

      });

    });

  });
});
