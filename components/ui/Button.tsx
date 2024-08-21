interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, ...props }) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Manejo del efecto de onda (ripple)
    const BUTTON = e.currentTarget;
    const rect = BUTTON.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    BUTTON.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600); // 600ms para que coincida con la duración de la animación

    // Llama a la función onClick pasada como prop
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button className={`button relative overflow-hidden text-sm ${className || ''}`} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default Button;