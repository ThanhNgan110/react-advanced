import { withErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../error/ErrorBoudaryComponent";
import { Cart } from "../type/FallBackComponent";

// CartDescription Component
interface CartDescriptionProps {
	items: Cart[]
}

// eslint-disable-next-line react-refresh/only-export-components
const CartDescription = ({ items }: CartDescriptionProps) => {
	return <div>Cart contains {items.length} items.</div>;
};

// eslint-disable-next-line react-refresh/only-export-components
export default withErrorBoundary(CartDescription, {
	FallbackComponent: ErrorFallback,
});
