import express from "express";
import exA from "../controller/examController";
const router = express.Router();

router.get("/api", async (req, res) => {
	let result = null;
	try {
		result = await exA.allu();
	} catch (error) {
		throw error;
	} finally {
		res.json(result);
	}
});

module.exports = router;

