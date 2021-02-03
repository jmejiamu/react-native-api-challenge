const showuserdata = async (req, res, db) => {
    try {
        const data = await db.select('*').from('userdata').orderBy('id', 'desc');
        res.status(200).send(data);
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = {
    showuserdata
}