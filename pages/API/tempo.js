function handler(req, res) {
    const dynamicDate = new Date();
    res.json({ date: dynamicDate.toLocaleDateString() });
}

export default handler;