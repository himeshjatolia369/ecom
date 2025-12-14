const productpricerange = (query) => {
    const filterOption = {}

    // Price Range
    if (query.minPrice || query.maxPrice) {
        filterOption.price = {}

        if (query.minPrice) {
            filterOption.price.$gte = Number(query.minPrice)
        }

        if (query.maxPrice) {
            filterOption.price.$lte = Number(query.maxPrice)
        }
    }

    return filterOption
//     {
//         price: {
//                 $gte: 500,
//                 $lte: 2000
//                }
//     }
}

module.exports.productpricerange = productpricerange
