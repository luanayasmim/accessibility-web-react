export async function axeAccessibilityReporter() {
  if (import.meta.env.DEV) {
    const axe = (await import("@axe-core/react")).default;
    const React = await import("react");
    const ReactDOM = await import("react-dom/client");

    axe(React, ReactDOM, 1000);
  }
}