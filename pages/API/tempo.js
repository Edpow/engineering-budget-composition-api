function handler(req, res) {
    const dynamicDate = new Date();
    res.status(200).json({ date: dynamicDate.toLocaleDateString() });
}

export default handler;