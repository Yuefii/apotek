import { useRouter } from "next/router";
import { checkAuthentication } from "./auth";
import { ComponentType, JSX, useEffect } from "react";

const withAuth = (WrappedComponent: ComponentType) => {
  const Wrapper = (props: JSX.IntrinsicAttributes) => {
    const router = useRouter();

    useEffect(() => {
      if (!checkAuthentication()) {
        router.push("/auth/login");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
