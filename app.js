import express from "express";

const app = express();

const port = 5000;

import index from "./src/routes/index.js";
import exam from "./src/routes/exam.js";

app.use("/index", index);
app.use("/exam", exam);

app.listen(port, () => {
	console.log("지금 이앱은 ", port, "포트 번호로 실행 중입니다!");
});

export default app;

