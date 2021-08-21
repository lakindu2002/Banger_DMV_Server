exports.fetchCsv = (req, res) => {
    //fetch the csv and send to the banger server
    res.status(200).json({
        message: "Hello World"
    })
}