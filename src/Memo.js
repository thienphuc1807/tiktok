import { memo } from "react";
// React.memo được gọi là Higher order component (HOC).
// Dùng để ghi nhớ các props của một component,
// quyết định xem có render lại component đó hay không để tối ưu về hiệu năng.
// Ngắn gọn React.memo dùng để xử lý component tránh re-render trong tình huống không cần thiết.
function Memo({ onIncrease }) {
  console.log("re-render");
  return (
    <>
      <button onClick={onIncrease}>Tăng</button>
    </>
  );
}

export default memo(Memo);
