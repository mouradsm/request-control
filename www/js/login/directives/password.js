'use strict';

angular.module('requestControl.directive.password',[]);
angular.module('requestControl.directive.password')
    .directive('password',function(){
        return {
            restrict: 'E',
            require: '^ngModel',
            template: [ '<div class="list">',
            '<label class="item item-input item-floating-label">',
            '<span class="input-label">Senha</span>',
            '<input type="password" placeholder="Senha" required/>',
            '</label>',
            '</div>'].join('')
        }
    });
