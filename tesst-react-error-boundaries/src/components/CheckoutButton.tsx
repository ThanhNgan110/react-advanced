import { withErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../error/ErrorBoudaryComponent";

interface CheckoutButtonProps {
	cartId: string;
}

// eslint-disable-next-line react-refresh/only-export-components
const CheckoutButton = ({ cartId }: CheckoutButtonProps) => {
	// throw new Error("oops, I made a mistake!");
   return <button>Checkout (Cart ID: {cartId})</button>;
};

// eslint-disable-next-line react-refresh/only-export-components
export default withErrorBoundary(CheckoutButton, {
	FallbackComponent: ErrorFallback,
});
