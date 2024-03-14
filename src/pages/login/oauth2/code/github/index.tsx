import { useEffect } from "react";
import { useRouter } from "next/router";

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    // URL에서 인증 코드 추출
    const code = router.query.code;

    if (code) {
      // 인증 코드를 서버로 전송
      fetch("http://localhost:8080/auth/github", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("인증 성공:", data);
          localStorage.setItem("accessToken", data.access_token);
          // 성공적인 인증 후 사용자를 홈페이지로 리다이렉트
          router.push("/welcome");
        })
        .catch((error) => {
          console.error("인증 실패:", error);
          // 인증 실패 처리
        });
    }
  }, [router]);

  return (
    <div>
      <h1>인증 처리 중...</h1>
    </div>
  );
};

export default RedirectPage;
