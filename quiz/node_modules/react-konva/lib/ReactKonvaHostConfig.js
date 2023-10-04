"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentEventPriority = exports.detachDeletedInstance = exports.clearContainer = exports.unhideTextInstance = exports.unhideInstance = exports.hideTextInstance = exports.hideInstance = exports.commitUpdate = exports.commitMount = exports.commitTextUpdate = exports.removeChildFromContainer = exports.removeChild = exports.insertInContainerBefore = exports.insertBefore = exports.appendChildToContainer = exports.appendChild = exports.supportsMutation = exports.warnsIfNotActing = exports.isPrimaryRenderer = exports.shouldSetTextContent = exports.noTimeout = exports.cancelTimeout = exports.scheduleTimeout = exports.getChildHostContext = exports.getRootHostContext = exports.shouldDeprioritizeSubtree = exports.resetTextContent = exports.resetAfterCommit = exports.prepareUpdate = exports.preparePortalMount = exports.prepareForCommit = exports.getPublicInstance = exports.finalizeInitialChildren = exports.createTextInstance = exports.createInstance = exports.appendInitialChild = exports.run = exports.idlePriority = exports.now = void 0;
const Core_js_1 = __importDefault(require("konva/lib/Core.js"));
const makeUpdates_js_1 = require("./makeUpdates.js");
var scheduler_1 = require("scheduler");
Object.defineProperty(exports, "now", { enumerable: true, get: function () { return scheduler_1.unstable_now; } });
Object.defineProperty(exports, "idlePriority", { enumerable: true, get: function () { return scheduler_1.unstable_IdlePriority; } });
Object.defineProperty(exports, "run", { enumerable: true, get: function () { return scheduler_1.unstable_runWithPriority; } });
const constants_js_1 = require("react-reconciler/constants.js");
const NO_CONTEXT = {};
const UPDATE_SIGNAL = {};
// for react-spring capability
Core_js_1.default.Node.prototype._applyProps = makeUpdates_js_1.applyNodeProps;
function appendInitialChild(parentInstance, child) {
    if (typeof child === 'string') {
        // Noop for string children of Text (eg <Text>foo</Text>)
        console.error(`Do not use plain text as child of Konva.Node. You are using text: ${child}`);
        return;
    }
    parentInstance.add(child);
    (0, makeUpdates_js_1.updatePicture)(parentInstance);
}
exports.appendInitialChild = appendInitialChild;
function createInstance(type, props, internalInstanceHandle) {
    let NodeClass = Core_js_1.default[type];
    if (!NodeClass) {
        console.error(`Konva has no node with the type ${type}. Group will be used instead. If you use minimal version of react-konva, just import required nodes into Konva: "import "konva/lib/shapes/${type}"  If you want to render DOM elements as part of canvas tree take a look into this demo: https://konvajs.github.io/docs/react/DOM_Portal.html`);
        NodeClass = Core_js_1.default.Group;
    }
    // we need to split props into events and non events
    // we we can pass non events into constructor directly
    // that way the performance should be better
    // we we apply change "applyNodeProps"
    // then it will trigger change events on first run
    // but we don't need them!
    const propsWithoutEvents = {};
    const propsWithOnlyEvents = {};
    for (var key in props) {
        var isEvent = key.slice(0, 2) === 'on';
        if (isEvent) {
            propsWithOnlyEvents[key] = props[key];
        }
        else {
            propsWithoutEvents[key] = props[key];
        }
    }
    const instance = new NodeClass(propsWithoutEvents);
    (0, makeUpdates_js_1.applyNodeProps)(instance, propsWithOnlyEvents);
    return instance;
}
exports.createInstance = createInstance;
function createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
    console.error(`Text components are not supported for now in ReactKonva. Your text is: "${text}"`);
}
exports.createTextInstance = createTextInstance;
function finalizeInitialChildren(domElement, type, props) {
    return false;
}
exports.finalizeInitialChildren = finalizeInitialChildren;
function getPublicInstance(instance) {
    return instance;
}
exports.getPublicInstance = getPublicInstance;
function prepareForCommit() {
    return null;
}
exports.prepareForCommit = prepareForCommit;
function preparePortalMount() {
    return null;
}
exports.preparePortalMount = preparePortalMount;
function prepareUpdate(domElement, type, oldProps, newProps) {
    return UPDATE_SIGNAL;
}
exports.prepareUpdate = prepareUpdate;
function resetAfterCommit() {
    // Noop
}
exports.resetAfterCommit = resetAfterCommit;
function resetTextContent(domElement) {
    // Noop
}
exports.resetTextContent = resetTextContent;
function shouldDeprioritizeSubtree(type, props) {
    return false;
}
exports.shouldDeprioritizeSubtree = shouldDeprioritizeSubtree;
function getRootHostContext() {
    return NO_CONTEXT;
}
exports.getRootHostContext = getRootHostContext;
function getChildHostContext() {
    return NO_CONTEXT;
}
exports.getChildHostContext = getChildHostContext;
exports.scheduleTimeout = setTimeout;
exports.cancelTimeout = clearTimeout;
exports.noTimeout = -1;
// export const schedulePassiveEffects = scheduleDeferredCallback;
// export const cancelPassiveEffects = cancelDeferredCallback;
function shouldSetTextContent(type, props) {
    return false;
}
exports.shouldSetTextContent = shouldSetTextContent;
// The Konva renderer is secondary to the React DOM renderer.
exports.isPrimaryRenderer = false;
exports.warnsIfNotActing = true;
exports.supportsMutation = true;
function appendChild(parentInstance, child) {
    if (child.parent === parentInstance) {
        child.moveToTop();
    }
    else {
        parentInstance.add(child);
    }
    (0, makeUpdates_js_1.updatePicture)(parentInstance);
}
exports.appendChild = appendChild;
function appendChildToContainer(parentInstance, child) {
    if (child.parent === parentInstance) {
        child.moveToTop();
    }
    else {
        parentInstance.add(child);
    }
    (0, makeUpdates_js_1.updatePicture)(parentInstance);
}
exports.appendChildToContainer = appendChildToContainer;
function insertBefore(parentInstance, child, beforeChild) {
    // child._remove() will not stop dragging
    // but child.remove() will stop it, but we don't need it
    // removing will reset zIndexes
    child._remove();
    parentInstance.add(child);
    child.setZIndex(beforeChild.getZIndex());
    (0, makeUpdates_js_1.updatePicture)(parentInstance);
}
exports.insertBefore = insertBefore;
function insertInContainerBefore(parentInstance, child, beforeChild) {
    insertBefore(parentInstance, child, beforeChild);
}
exports.insertInContainerBefore = insertInContainerBefore;
function removeChild(parentInstance, child) {
    child.destroy();
    child.off(makeUpdates_js_1.EVENTS_NAMESPACE);
    (0, makeUpdates_js_1.updatePicture)(parentInstance);
}
exports.removeChild = removeChild;
function removeChildFromContainer(parentInstance, child) {
    child.destroy();
    child.off(makeUpdates_js_1.EVENTS_NAMESPACE);
    (0, makeUpdates_js_1.updatePicture)(parentInstance);
}
exports.removeChildFromContainer = removeChildFromContainer;
function commitTextUpdate(textInstance, oldText, newText) {
    console.error(`Text components are not yet supported in ReactKonva. You text is: "${newText}"`);
}
exports.commitTextUpdate = commitTextUpdate;
function commitMount(instance, type, newProps) {
    // Noop
}
exports.commitMount = commitMount;
function commitUpdate(instance, updatePayload, type, oldProps, newProps) {
    (0, makeUpdates_js_1.applyNodeProps)(instance, newProps, oldProps);
}
exports.commitUpdate = commitUpdate;
function hideInstance(instance) {
    instance.hide();
    (0, makeUpdates_js_1.updatePicture)(instance);
}
exports.hideInstance = hideInstance;
function hideTextInstance(textInstance) {
    // Noop
}
exports.hideTextInstance = hideTextInstance;
function unhideInstance(instance, props) {
    if (props.visible == null || props.visible) {
        instance.show();
    }
}
exports.unhideInstance = unhideInstance;
function unhideTextInstance(textInstance, text) {
    // Noop
}
exports.unhideTextInstance = unhideTextInstance;
function clearContainer(container) {
    // Noop
}
exports.clearContainer = clearContainer;
function detachDeletedInstance() { }
exports.detachDeletedInstance = detachDeletedInstance;
const getCurrentEventPriority = () => constants_js_1.DefaultEventPriority;
exports.getCurrentEventPriority = getCurrentEventPriority;
