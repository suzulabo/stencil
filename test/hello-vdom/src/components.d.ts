/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { JSXBase } from '@stencil/core';



export namespace Components {
  interface HelloVdom {}
}

interface HTMLStencilElement extends HTMLElement {
  componentOnReady(): Promise<this>;
  forceUpdate(): void;
}

declare namespace LocalJSX {
  interface HelloVdom extends JSXBase.HTMLAttributes {}

  interface ElementInterfaces {
    'HelloVdom': Components.HelloVdom;
  }

  interface IntrinsicElements {
    'HelloVdom': LocalJSX.HelloVdom;
  }
}
export { LocalJSX as JSX };

declare module "@stencil/core" {
  export namespace JSX {
    interface ElementInterfaces extends LocalJSX.ElementInterfaces {}
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}

declare global {

  interface HTMLHelloVdomElement extends Components.HelloVdom, HTMLStencilElement {}
  var HTMLHelloVdomElement: {
    prototype: HTMLHelloVdomElement;
    new (): HTMLHelloVdomElement;
  };
  interface HTMLElementTagNameMap {
    'hello-vdom': HTMLHelloVdomElement
  }

  interface ElementTagNameMap {
    'hello-vdom': HTMLHelloVdomElement;
  }
}

