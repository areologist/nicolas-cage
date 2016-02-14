import './giph.less';
import template from './giph.html';

export const giphComponent = () => {
  return {
    template,
    restrict: 'E',
    scope: {
      giph: '='
    },
    controller: angular.noop,
    controllerAs: '$ctrl',
    bindToController: true,
    replace: true,
    link: giphLink
  };
};

const giphLink = (scope, element, attrs) => {
  const image = new Image();
  const onload = () => {
    element.attr('class', element.attr('class').replace(' preload', ''));
    element[0].querySelector('img').src = image.src;
  };
  image.addEventListener('load', onload);
  image.src = scope.$ctrl.giph.fixedHeight.url;
};
