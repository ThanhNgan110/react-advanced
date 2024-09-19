/* eslint-disable @typescript-eslint/no-unused-vars */
import { withErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../error/ErrorBoudaryComponent";

// CreditCardInput Component
// eslint-disable-next-line react-refresh/only-export-components
const CreditCardInput = () => {
	// throw new Error("oops, I made a mistake!");
	return <input type="text" placeholder="Enter credit card number" />;
}


// eslint-disable-next-line react-refresh/only-export-components
export default withErrorBoundary(CreditCardInput, {
	FallbackComponent: ErrorFallback,
});
