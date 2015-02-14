module.exports = function(e) {
  if (!e) return false;

  if (typeof HTMLElement === "object") return e instanceof HTMLElement;

  return typeof e === "object" && e.nodeType === 1 && typeof e.nodeName==="string";
};