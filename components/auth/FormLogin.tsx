import Button from "../ui/Button";
import Input from "../ui/Input";

const FormLogin = ({ handleSubmit, isLoading, error }: any) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <Input label="Username" name="text" type="text" />
        <Input label="Password" name="password" type="password" />
        {error && (
          <p className="mt-2 text-sm font-light text-red-600">{error}</p>
        )}
        <Button type="submit" className="w-full">
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </form>
    </>
  );
};

export default FormLogin;
