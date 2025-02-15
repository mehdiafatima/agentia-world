import { cn } from "@/lib/utils";

interface ButtonProps {
  text: string;
  primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, primary = false }) => {
  return (
    <button
      className={cn(
        "px-6 py-2 rounded-md transition-all",
        primary
          ? "bg-purple-600 hover:bg-purple-700 text-white"
          : "bg-gray-700 hover:bg-gray-800 text-white"
      )}
    >
      {text}
    </button>
  );
};

export default Button;
