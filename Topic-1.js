getDiscount = (purchasePrice) => {

    if (purchasePrice < 50) {
        return 0;
    }
    else if (purchasePrice >= 50 && purchasePrice <= 100) {
        return purchasePrice * 0.05;
    }
    else if (purchasePrice > 100 && purchasePrice <= 200) {
        return purchasePrice * 0.1;
    }
    else if (purchasePrice > 200) {
        return purchasePrice * 0.15;
    }
}



function main(input) {
    totalpurchase = parseInt(input.trim());
    discount = getDiscount(totalpurchase);
    console.log(`Total Amount is: ${totalpurchase}`);
    console.log(`Discounted Amount is: ${discount}`);
    console.log(`Grand Total After Discount is: ${totalpurchase - discount}`);

}

process.stdin.on('data', data => {
    main(data.toString());
})

