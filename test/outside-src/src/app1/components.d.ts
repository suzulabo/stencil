/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
    }
    interface SharedPanel {
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLSharedPanelElement extends Components.SharedPanel, HTMLStencilElement {
    }
    var HTMLSharedPanelElement: {
        prototype: HTMLSharedPanelElement;
        new (): HTMLSharedPanelElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "shared-panel": HTMLSharedPanelElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface SharedPanel {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "shared-panel": SharedPanel;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "shared-panel": LocalJSX.SharedPanel & JSXBase.HTMLAttributes<HTMLSharedPanelElement>;
        }
    }
}
