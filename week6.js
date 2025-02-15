// Conditional rendering

/*
const balance = 450;

const checkBalance = (b) => {
    const balanceMin = 100;
    return console.log( b < balanceMin ? "Your balance is too low to qualify for No-Transaction fee." : "You qualify for No-Transaction fee.");
}

checkBalance(100);
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
//Bottom-up approach

// ShoppingCart component to display the current number of items in the cart
const ShoppingCart = (props) => {
    const cart = props.cart; // Get the cart count from props
    return <p>{cart}</p>; // Render the cart count inside a paragraph element
}

// SecondaryInfo component to provide a button for updating the cart
const SecondaryInfo = (props) => {
    // Function to handle the button click event and call the addToCart function from props
    const updateCart = () => {
        props.addToCart();
    }

    // Render a button that displays the current cart count and calls updateCart on click
    return (
        <button onClick={updateCart}>Update Cart ({props.cart})</button>
    );
}

// Parent component App that combines ShoppingCart and SecondaryInfo components
const App = () => {
    // State to manage the cart count, initialized to 0
    const [cart, setCart] = React.useState(0);

    // Function to log the current cart count (not used in the UI)
    const cartContents = () => {
        return console.log(cart);
    }

    // Function to increment the cart count by 1
    const addToCart = () => {
        setCart(cart + 1);
    }

    // Render the App component with header, main content, and footer
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart: <ShoppingCart cart={cart} /></li> {/* Display cart count in the header */}
                    </ul>
                </nav>
            </header>

            <main>
                <h2>Welcome to our store</h2>
                <p>Lorem ipsum dolor set</p>
                <h3>Your cart: <ShoppingCart cart={cart} /></h3> {/* Display cart count in the main content */}
                <SecondaryInfo addToCart={addToCart} cart={cart} /> {/* Button to update the cart */}
            </main>

            <footer>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart: <ShoppingCart cart={cart} /></li> {/* Display cart count in the footer */}
                </ul>
                <span>&copy; 2025</span>
            </footer>
        </>
    );
}

// Render the App component into the root element
root.render(<App />);