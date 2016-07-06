angular.module('CardsAgainstAssembly', []);

function wdiCard(){
  var directive = {
    restrict: 'E',
    replace: true,
    templateUrl: "templates/cardDirective.html"
  };

  return directive;
}