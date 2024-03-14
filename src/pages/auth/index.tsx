import "@/styles/globals.css";

const AuthPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 m-4 bg-white rounded-lg shadow-xl">
        <h1 className="text-2xl text-blue-950 font-bold text-center mb-4">소셜 계정으로 로그인</h1>
        <div className="space-y-4">
          <a
            href="https://github.com/login/oauth/authorize?scope=user:email&client_id=b84d261c041eaa27ea65"
            className="block w-full py-2 text-center text-white bg-black rounded hover:bg-gray-800 transition duration-150 ease-in-out"
          >
            GitHub으로 로그인
          </a>
          <a
            href="http://localhost:8080/oauth2/authorization/google"
            className="block w-full py-2 text-center text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-150 ease-in-out"
          >
            Google로 로그인
          </a>
          <a
            href="http://localhost:8080/oauth2/authorization/kakao"
            className="block w-full py-2 text-center text-white bg-yellow-400 rounded hover:bg-yellow-500 transition duration-150 ease-in-out"
          >
            카카오톡으로 로그인
          </a>
          <a
            href="http://localhost:8080/oauth2/authorization/apple"
            className="block w-full py-2 text-center text-white bg-black rounded hover:bg-gray-800 transition duration-150 ease-in-out"
          >
            Apple로 로그인
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
