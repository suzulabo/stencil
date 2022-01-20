import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'shared-panel',
  styleUrl: 'shared-panel.css',
})
export class SharedPanel {
  render() {
    return <Host>shared-panel</Host>;
  }
}
