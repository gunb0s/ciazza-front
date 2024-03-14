import React, { useEffect } from "react";

const WelcomePage: React.FC = () => {
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return;

    fetch("http://localhost:8080/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  // 로그아웃 처리 예시 함수
  const handleLogout = async () => {
    // 로그아웃 로직 구현, 예: 서버에 로그아웃 요청
    console.log("Logging out...");
    // 홈페이지로 리다이렉트
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Welcome!</h1>
        <p className="mt-4 text-lg">OAuth 인증을 통해 성공적으로 로그인했습니다.</p>
        <button
          onClick={handleLogout}
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-150 ease-in-out"
        >
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
