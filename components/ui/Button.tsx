interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
  className,
  variant = "primary",
}) => {
  const styleByVariant: Record<string, string> = {
    primary:
      "text-white rounded-lg bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300",
    secondary:
      "border-2 border-gray-300 rounded-full transition duration-300 hover:border-cyan-400 focus:bg-cyan-50 active:bg-cyan-100",
  };
  const buttonStyle = `font-medium text-sm px-6 py-2.5 text-center ${styleByVariant[variant]}`;
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`${buttonStyle} ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
