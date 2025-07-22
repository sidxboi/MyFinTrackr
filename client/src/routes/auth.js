router.post('/register', async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({ error: "Missing credentials" });
	}

	const existing = await User.findOne({ email });
	if (existing) {
		return res.status(409).json({ error: "User already exists" });
	}

	const hashed = await bcrypt.hash(password, 10);
	const user = new User({ email, password: hashed });
	await user.save();

	res.json({ success: true });
});
