import express from "express";
const router = express.Router();

router.get("/api", (req, res) => {
	res.send("안녕하세요!");
});

module.exports = router;
