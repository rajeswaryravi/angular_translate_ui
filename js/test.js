describe('passCont', function() {
  beforeEach(module('myApp'));
  var $controller;
  beforeEach(inject(function(_$controller_){
  $controller = _$controller_;
  }));
  describe('testing', function() {
    it('IShi', function() {
    var $scope = {};
    $controller('myController', {$scope: $scope});
    expect($scope.text).toEqual('hai');
  });
  it('addTest',function(){
    var $scope = {};
    var modalInstance = {      
    close: jasmine.createSpy('modalInstance.close'),
    dismiss: jasmine.createSpy('modalInstance.dismiss'),
    result: {
    then: jasmine.createSpy('modalInstance.result.then')
    }
    }; 
    var controller = $controller('popController', { 
    $scope: $scope,
    $uibModalInstance: modalInstance
    }); 
    $scope.taskid="548472";
    $scope.taskname="Rajeswary";
    $scope.add_detail();
    expect($scope.table_array).toContain({ taskid: '548472', taskname: 'Rajeswary' }); 
    }) 
    it('RemoveTest', function() {
       var $scope = {};
       $controller('myController', {$scope: $scope});
       $scope.taskid="548472";
       $scope.taskname="Rajeswary";
       $scope.remove();
      expect($scope.table_array).not.toContain({ taskid: '548472', taskname: 'Rajeswary' }); 
    }); 
  });
}); 


