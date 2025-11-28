import { axeAccessibilityReporter } from "./utils/axeAccessibilityReporter";
import AccessibilityPage from "./pages/accessibility.page";
// import WithoutAccessibilityPage from "./pages/without-accessibility.page.tsx";

await axeAccessibilityReporter();

function App() {
  return <AccessibilityPage />;
  // return <WithoutAccessibilityPage />;
}

export default App;
