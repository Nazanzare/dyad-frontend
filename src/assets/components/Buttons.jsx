function Buttons({
  text,
  size = "lg",
  color = "",
  icon: Icon,
  onClick,
  isLoading = false,
  disabled = false,
  radius = 8,
}) {
  const sizeClasses = {
    xsmall: "w-full h-8 text-sm",
    small: "w-full h-10 text-sm",
    medium: "w-full h-12 text-sm",
    large: "w-full h-14 text-lg",
  };

  const colorClasses = {
    blueFilled: "bg-primary-50 hover:bg-primary-60 text-white",
    blueText:
      "text-primary-50 bg-transparent border border-transparent hover:bg-white hover:border-primary-50 hover:text-primary-50",
    blackText:
      "text-black bg-transparent border border-transparent hover:bg-white hover:border-black hover:text-black",
    blackBorder:
      "bg-[#FFFFFF] hover:bg-white border-[#0C0C0C] hover:text-black border b-1-[#0C0C0C] hover:b-2-[#0C0C0C] text-[#0C0C0C]",
  };

  return (
    <button
      type="button"
      className={`flex items-center justify-center gap-2 font-medium transition duration-200 
        ${sizeClasses[size]} 
        ${colorClasses[color]} 
        disabled:opacity-50
      `}
      style={{
        borderRadius: radius ? `${radius}px` : undefined,
      }}
      onClick={!disabled && !isLoading ? onClick : undefined}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
      ) : (
        <>
          {Icon && <Icon className="w-5 h-5" />}
          {text}
        </>
      )}
    </button>
  );
}

export default Buttons;
