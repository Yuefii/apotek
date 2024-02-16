import { useState } from "react";
import { useRouter } from "next/router";
import Button from "../ui/Button";
import Input from "../ui/Input";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }
      setToken(data.token);
      router.push("/");
    } catch (error: any) {
      setError(error.message || "");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <Input
          value={username}
          defaultValue=""
          label="Username"
          name="text"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          value={password}
          label="Password"
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
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
