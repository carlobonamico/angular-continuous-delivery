xdescribe("the AppInfo directive", function() {
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

   beforeEach(inject(function($rootScope, $compile) {
     scope = $rootScope.$new();



     httpBackend.when('GET', 'data/appInfo.json')
         .respond({
             "version": "0.0.2",
             "user" : "validuser"
         });

     element =
         '<app-info></app-info>';

     element = $compile(element)(scope);

     //scope.$digest();
   }));



  describe("by default", function() {
    describe("when the input appInfo.json is present", function() {
      //TODO fix position of httpBackend

      it("should display the version ", function() {



        //httpBackend.flush();

        console.log(element.find('h3'));

        expect(element.find('h3').text()).toBe('LOCAL');
      });

    });

  });
});
