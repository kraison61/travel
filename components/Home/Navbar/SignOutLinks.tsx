import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner"


const SignOutLinks = () => {
    const handleLogout = () => {
        toast("Logout Successfully!!!")
    }
  return (



    <SignOutButton>
      <button className="md:px-12 md:py-2.5 px-8 py-2 font-semibold text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg" onClick={handleLogout}>SignOut</button>
    </SignOutButton>
    
  );
};
export default SignOutLinks;
