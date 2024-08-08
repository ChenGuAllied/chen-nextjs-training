export default function handler(req, res) {
    const { name } = req.body;
    res.status(200).json({ greeting: `Hello, ${name}!` });
}