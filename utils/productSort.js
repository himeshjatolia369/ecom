const productSort = (query) => {
    const sortOption = {}

    if (query.price === "low-high") {
        sortOption.price = 1
    } 
    else if (query.price === "high-low") {
        sortOption.price = -1
    }

    return sortOption
    //{ price: -1 }
    //{ price: 1}
    //mongo automatically sort 1 to h or h to low

}

module.exports.productSort = productSort
