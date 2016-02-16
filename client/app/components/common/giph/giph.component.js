import './giph.less';
import template from './giph.html';

export const giphComponent = () => {
  return {
    template,
    controller() {},
    controllerAs: '$ctrl',
    scope: {
      giph: '<'
    },
    bindToController: true,
    restrict: 'E',
    replace: true,
    link: giphLink
  };
};

const giphLink = (scope, element, attrs) => {
  const image = new Image();
  const onload = () => {
    const elem = element[0];
    elem.classList.remove('preload');
    elem.querySelector('img').src = image.src;
  };
  element.on('$destroy', () => image.removeEventListener('load', onload));
  image.addEventListener('load', onload);
  image.src = scope.$ctrl.giph.fixedHeight.url;
};
