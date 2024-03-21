import clsx from "clsx";
const Button = ({ children, variant, onClick, type, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "py-[10px] px-[16px] text-base rounded-lg",
        {
          "bg-primary text-white": variant === "primary",
          "border bg-transparent text-black": variant === "secondary",
          "border border-secondary bg-neutral text-black":
            variant === "neutral",
        },
        className
      )}
    >
      {" "}
      {children}
    </button>
  );
};

export default Button;
