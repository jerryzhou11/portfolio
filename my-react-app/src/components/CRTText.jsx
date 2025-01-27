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
    switch (color.toLowerCase()) {
      case 'green':
        return 'rgba(0, 255, 0, 0.8)';
      case 'neon':
        return 'rgba(45, 226, 255, 0.8)';
      case 'red':
        return 'rgba(255, 0, 0, 0.8)';
      case 'yellow':
        return 'rgba(255, 255, 0, 0.8)';
      default:
        return 'rgba(255, 255, 255, 0.8)';
    }
  };

  return (
    <Component
      className={`relative z-30 ${className}`}
      style={{
        color: color,
        textShadow: `
          0 0 4px ${getGlowColor()},
          0 0 8px ${getGlowColor()},
          0 0 12px ${getGlowColor()},
          0 0 16px ${getGlowColor()},
          0 0 20px ${getGlowColor()}
        `,
        filter: 'brightness(1.2) contrast(1.1)'
      }}
    >
      {children}
    </Component>
  );
};

// Convenience components for common HTML elements
CRTText.H1 = props => <CRTText as="h1" className="text-4xl font-bold mb-4" {...props} />;
CRTText.H2 = props => <CRTText as="h2" className="text-3xl font-bold mb-3" {...props} />;
CRTText.H3 = props => <CRTText as="h3" className="text-2xl font-bold mb-2" {...props} />;
CRTText.P = props => <CRTText as="p" className="text-base mb-4" {...props} />;
CRTText.Span = props => <CRTText as="span" {...props} />;

export default CRTText;