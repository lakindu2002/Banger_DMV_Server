exports.fetchCsv = (req, res) => {
    //fetch the csv and send to the banger server to download
    res.status(200);
    res.download("." + "/files/license_list_cb007787.csv");
}