import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { FormEvent, useState } from "react";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate({
    from: "/login",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldsError, setFieldsError] = useState({
    email: false,
    password: false,
  });

  // const handleError = () => {
  //   setFieldsError({
  //     email: !email,
  //     password: !password
  //   })
  // }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const token = "user";

    if (token) {
      auth.login(token);
      navigateTo("/");
    }
  };

  const navigateTo = (to: string): void => {
    navigate({
      to,
      from: "/login",
    })
      .then(() => null)
      .catch((err: unknown) => err);
  };

  return (
    <div className="w-full h-full flex transition-all">
      <div className="flex-1 flex flex-col justify-center items-center max-lg:w-full max-xl:w-1/2">
        <h1 className="font-bold text-3xl mb-6">LOGIN</h1>
        {/* {isError && <h3 className="mb-2 text-yellow-400">Email ou senha incorretos</h3>} */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-sm max-sm:w-xs"
        >
          <input
            data-error={fieldsError.email}
            className="border-1 border-primary rounded-sm pl-2 data-[error=true]:border-red-500"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            data-error={fieldsError.password}
            className="border-1 border-primary rounded-sm pl-2 data-[error=true]:border-red-500"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Senha"
          />
          <Button>
            Login
            {/* {isPending && <div className="w-4 h-4 border-1 border-secondary border-t-transparent rounded-full animate-spin" />} */}
          </Button>
        </form>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/(public)/login/")({
  beforeLoad(ctx) {
    const { context } = ctx;

    if (context.auth.isAuthenticated) {
      return redirect({
        to: "/",
      });
    }
  },
  component: Login,
});
