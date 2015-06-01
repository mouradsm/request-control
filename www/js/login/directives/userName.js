'use strict';

angular.module('requestControl.directive.userName',[]);
angular.module('requestControl.directive.userName')
    .directive('username',function(){
    return {
        restrict: 'E',
        require: '^ngModel',
        template: [ '<div class="list">',
        '<label class="item item-input item-floating-label">',
        '<span class="input-label">Usuário</span>',
        '<input type="text" placeholder="Usuário" required/>',
        '</label>',
        '</div>'].join('')
    }
});
