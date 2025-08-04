const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// 현재 디렉토리(`__dirname`)를 정적 파일로 사용
app.use(express.static(__dirname));

// 루트 요청 시 HTML 파일 반환
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "complete_kidscafe_search.html"));
});

app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${PORT}`);
});
