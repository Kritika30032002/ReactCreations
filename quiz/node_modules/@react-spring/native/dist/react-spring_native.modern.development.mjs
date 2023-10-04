var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});

// src/index.ts
import { StyleSheet } from "react-native";
import { createHost, AnimatedObject as AnimatedObject3 } from "@react-spring/animated";
import {
  is,
  Globals,
  createStringInterpolator,
  colors
} from "@react-spring/shared";

// src/primitives.ts
import {
  Text,
  View,
  Image
} from "react-native";
var primitives = {
  View,
  Text,
  Image
};

// src/AnimatedStyle.ts
import { AnimatedObject as AnimatedObject2 } from "@react-spring/animated";

// src/AnimatedTransform.ts
import { each, eachProp, getFluidValue } from "@react-spring/shared";
import { AnimatedObject } from "@react-spring/animated";
var AnimatedTransform = class extends AnimatedObject {
  constructor(source) {
    super(source);
  }
  getValue() {
    return this.source ? this.source.map((source) => {
      const transform = {};
      eachProp(source, (source2, key) => {
        transform[key] = getFluidValue(source2);
      });
      return transform;
    }) : [];
  }
  setValue(source) {
    this.source = source;
    this.payload = this._makePayload(source);
  }
  _makePayload(source) {
    if (!source)
      return [];
    const payload = /* @__PURE__ */ new Set();
    each(source, (transform) => eachProp(transform, this._addToPayload, payload));
    return Array.from(payload);
  }
};

// src/AnimatedStyle.ts
var AnimatedStyle = class extends AnimatedObject2 {
  constructor(style) {
    super(style);
  }
  setValue(style) {
    super.setValue(
      style && style.transform ? { ...style, transform: new AnimatedTransform(style.transform) } : style
    );
  }
};

// src/index.ts
export * from "@react-spring/core";
Globals.assign({
  batchedUpdates: __require("react-native").unstable_batchedUpdates,
  createStringInterpolator,
  colors
});
var host = createHost(primitives, {
  applyAnimatedValues(instance, props) {
    if (is.und(props.children) && instance.setNativeProps) {
      instance.setNativeProps(props);
      return true;
    }
    return false;
  },
  createAnimatedStyle(styles) {
    styles = StyleSheet.flatten(styles);
    if (is.obj(styles.shadowOffset)) {
      styles.shadowOffset = new AnimatedObject3(styles.shadowOffset);
    }
    return new AnimatedStyle(styles);
  }
});
var animated = host.animated;
export {
  animated as a,
  animated
};
//# sourceMappingURL=react-spring_native.modern.development.mjs.map