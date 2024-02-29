const AuthPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 m-4 bg-white rounded shadow-md">
        <h1 className="text-xl font-semibold">GitHub OAuth 인증</h1>
        <p className="mt-4">GitHub 계정으로 로그인하세요.</p>
        <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700">
          <a href={"http://localhost:8080/oauth2/authorization/github"}>GitHub으로 로그인</a>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
