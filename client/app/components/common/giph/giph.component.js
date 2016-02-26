import './giph.less';
import template from './giph.html';

export const giphComponent = () => {
  // This is our contrived link function to show a component that requires
  // more than module.component() accommodates.
  const giphLink = (scope, element) => {
    const giphUrl = scope.$ctrl.giph.fixedHeight.url;
    const image = new Image();
    const onload = () => {
      const elem = element[0];
      elem.classList.remove('preload');
      elem.querySelector('img').src = giphUrl;
    };
    image.addEventListener('load', onload);
    element.on('$destroy', () => image.removeEventListener('load', onload));
    image.src = giphUrl;
  };

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
