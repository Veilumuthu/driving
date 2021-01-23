const customerSelector = (customers, { text, number }) => {
    return customers.filter((customer) => {
        const textMatch = customer.name.toLowerCase().includes(text.toLowerCase());
        const numberMatch = customer.primary.includes(number)

        return textMatch && numberMatch;
    })
}

export default customerSelector;