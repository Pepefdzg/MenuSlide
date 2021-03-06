/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface SliderMenu {
    'message': string;
  }
}

declare global {


  interface HTMLSliderMenuElement extends Components.SliderMenu, HTMLStencilElement {}
  var HTMLSliderMenuElement: {
    prototype: HTMLSliderMenuElement;
    new (): HTMLSliderMenuElement;
  };
  interface HTMLElementTagNameMap {
    'slider-menu': HTMLSliderMenuElement;
  }
}

declare namespace LocalJSX {
  interface SliderMenu extends JSXBase.HTMLAttributes<HTMLSliderMenuElement> {
    'message'?: string;
  }

  interface IntrinsicElements {
    'slider-menu': SliderMenu;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


