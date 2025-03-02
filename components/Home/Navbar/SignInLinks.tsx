

const SignInLinks = () => {
  return (
    <SignIn>
      <button
        className="md:px-12 md:py-2.5 px-8 py-2 font-semibold text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg"
        onClick={handleLogout}
      >
        SignOut
      </button>
    </SignIn>
  );
};
export default SignInLinks;
