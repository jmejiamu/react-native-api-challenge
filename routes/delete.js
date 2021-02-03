const deleteuserdata = async (req, res, db) => {
    try {
        const { user_id } = req.params;

        const deleteData = await db('userdata').where({ id: user_id }).del()
        res.status(200).send({ response: "deleted!" })
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {
    deleteuserdata
}