import React, { useEffect, useState } from "react";
import { ProductsFetchingError } from "../components/errors/ProductsFetchingError";
import { fetchCartItems } from "../fetchers/products";
import CartItems from "../components/CartItems";
import CheckoutSummary from "../components/CheckoutSummary";
import CheckoutButton from "../components/CheckoutButton";

export class  StandardErrorBoundary extends React.Component<any, any> {
	state: {
		hasError: boolean;
		error?: Error | null;
	};

	// to keep track of when an error occurs
	// and the error itself
	constructor(props: any) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
		};
	}

	// update state component when error occurs
	static getDerivedStateFromError(error) {
		return {
			hasError: true,
			error: error,
		};
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		console.error(error);
		console.error(errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// render any custom fallback UI
			return <ProductsFetchingError error={this.state.error?.message || ""} />;
		}

		return this.props.children;
	}
}

export const UsingErrorBoundaries = () => {
  const [cartItems, setCartItems] = useState([]);

  const handlePayClick = () => {
    // Handle the payment process here
  };

  const subtotal = cartItems.reduce(
    (sum, item: any) => sum + item.price * item.quantity,
    0
  );
  const discount = 0;
  const total = subtotal - discount;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await fetchCartItems();
        setCartItems(items);
      } catch (err) {}
    };
    fetchItems();
  }, []);

  return (
    <div className="checkout-page min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Checkout</h1>
        <CartItems items={cartItems} />
        <CheckoutSummary
          subtotal={subtotal}
          discount={discount}
          total={total}
        />
        <div className="mt-4">
          <CheckoutButton onClick={handlePayClick} />
        </div>
      </div>
    </div>
  );
};
