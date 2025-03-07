interface Item {
    name: string;
    price: number;
    quantity: number;
}

function calculatePrice(items: Item[]): number {
    return items.reduce(
        (total, item) => total + (item.price * item.quantity),
        0,
    );
}

function shoppingManagement() {
    const items: Item[] = [];

    // Get customer name
    const customerName: string = prompt("Enter the name of the customer:") ||
        "Unknown customer";

    let moreInfo: boolean = true;

    while (moreInfo) {
        const itemPriceInput: string | null = prompt(
            `Enter the price of item:`,
        );
        const itemPrice: number = parseFloat(itemPriceInput || "0");

        const quantityInput: string | null = prompt(
            `Enter the total quantity of item:`,
        );
        const quantity: number = parseInt(quantityInput || "0", 10);

        items.push({ name: customerName, price: itemPrice, quantity });

        const addMoreInput: string | null = prompt(
            "Do you want to add more items? (yes/no):",
        );
        // Check for various forms of "yes"
        moreInfo = addMoreInput?.toLowerCase() === "yes" ||
            addMoreInput?.toLowerCase() === "y";
    }

    // Calculate the total price
    const totalPrice: number = calculatePrice(items);

    console.log(`Customer name: ${customerName}`);
    console.log(`<===============================>`);
    console.log("Items in the cart");
    items.forEach((item) => {
        console.log(`- ${item.name}: ${item.price}Rs * ${item.quantity}`);
    });
    console.log(`Total price: ${totalPrice}Rs`);

    const paymentInput: string | null = prompt(
        "Enter the amount given by the customer:",
    );
    const payment: number = parseFloat(paymentInput || "0");
    // Get payment from customer
    const change: number = payment - totalPrice;

    if (change < 0) {
        console.log("Insufficient payment. Please provide a complete amount");
    } else {
        console.log(`Change to be returned to the customer: ${change}Rs`);
    }
    console.log(`Thank you ${customerName} for shopping!`);
}

shoppingManagement();
