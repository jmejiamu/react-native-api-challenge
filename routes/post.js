const userdata = async (req, res, db) => {
    try {
        const { name, last_name, phone } = req.body;
        const data = await db
            .insert({
                name: name,
                last_name: last_name,
                phone: phone
            })
            .into('userdata')
        res.status(200).send({ response: "data inseted" })
    } catch (error) {
        console.error(error.message);
    }

}

module.exports = {
    userdata
}