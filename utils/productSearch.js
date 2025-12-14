const productsearch = (query) => {
    const searchOption = {}

    if (query.search && query.search.trim() !== "") {
        searchOption.$or = [
            { name: { $regex: query.search, $options: "i" } },
            { description: { $regex: query.search, $options: "i" } }
        ]
    }

    return searchOption
}

module.exports.productsearch = productsearch
