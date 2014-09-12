///<reference path="../reference.ts" />

module Plottable {
export module Abstract {
  export class Interaction extends PlottableObject {
    /**
     * It maintains a 'hitBox' which is where all event listeners are
     * attached. Due to cross- browser weirdness, the hitbox needs to be an
     * opaque but invisible rectangle.  TODO: We should give the interaction
     * "foreground" and "background" elements where it can draw things,
     * e.g. crosshairs.
     */
    public _hitBox: D3.Selection;
    public _componentToListenTo: Abstract.Component;

    public _anchor(component: Abstract.Component, hitBox: D3.Selection) {
      this._componentToListenTo = component;
      this._hitBox = hitBox;
    }
  }
}
}
