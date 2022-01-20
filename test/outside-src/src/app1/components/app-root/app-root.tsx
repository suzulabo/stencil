import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  render() {
    return (
      <Host>
        hello
        <shared-panel></shared-panel>
      </Host>
    );
  }
}
