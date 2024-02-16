import AuthLayout from "@/components/auth/Layout";
import FormLogin from "@/components/auth/FormLogin";

const loginPages = () => {
  return (
    <>
      <AuthLayout title="Login">
        <FormLogin />
      </AuthLayout>
    </>
  );
};

export default loginPages;
