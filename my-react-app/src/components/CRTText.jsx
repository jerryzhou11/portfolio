const CRTText = ({ 
  children, 
  color = 'white',
  glowColor = 'rgba(255, 255, 255, 0.8)',
  className = '',
  as: Component = 'div',
  isEnabled = true 
}) => {
  const getGlowColor = () => {
    if (glowColor !== 'rgba(255, 255, 255, 0.8)') return glowColor;
    // Get the computed color if using hover states
    const computedColor = color.startsWith('#') ? color : // Handle hex colors
      color === 'neon' ? '#2DE2FF' : color; // Handle named colors
      
    switch (computedColor.toLowerCase()) {
      case 'green':
        return 'rgba(0, 255, 0, 0.8)';
      case 'neon':
        return 'rgba(45, 226, 255, 0.8)';
      case 'red':
        return 'rgba(255, 0, 0, 0.8)';
      case 'yellow':
        return 'rgba(255, 255, 0, 0.8)';
      default:
        if (computedColor.startsWith('#')) {
          // Convert hex to rgba
          const r = parseInt(computedColor.slice(1, 3), 16);
          const g = parseInt(computedColor.slice(3, 5), 16);
          const b = parseInt(computedColor.slice(5, 7), 16);
          return `rgba(${r}, ${g}, ${b}, 0.8)`;
        }
        return 'rgba(255, 255, 255, 0.8)';
    }
  };

  if (isEnabled) {
    return (
      <Component
        className={`relative z-30 ${className}`}
        style={{
          color: color,
          textShadow: `
            0 0 4px currentColor,
            0 0 8px currentColor,
            0 0 12px currentColor,
            0 0 16px currentColor,
            0 0 20px currentColor
          `,
          filter: 'brightness(1.1) contrast(1.1)'
        }}
      >
        {children}
      </Component>
    );
  } else {
    return (
      <Component className={className} style={{color: color}}>
        {children}
      </Component>
    );
  }
};

// Convenience components for common HTML elements
CRTText.H1 = props => <CRTText as="h1" className="text-4xl font-bold mb-4" {...props} />;
CRTText.H2 = props => <CRTText as="h2" className="text-3xl font-bold mb-3" {...props} />;
CRTText.H3 = props => <CRTText as="h3" className="text-2xl font-bold mb-2" {...props} />;
CRTText.P = props => <CRTText as="p" className="text-base mb-4" {...props} />;
CRTText.Span = props => <CRTText as="span" {...props} />;

export default CRTText;