function handler(req, res) {
    const dynamicDate = new Date();

    res.json({
        date: dynamicDate.toISOString()
    })
}

export default handler;