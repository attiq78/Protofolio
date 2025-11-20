interface SocialIconProps {
  name: string;
  className?: string;
}

const SocialIcon = ({ name, className = '' }: SocialIconProps) => {
  const iconMap: Record<string, string> = {
    github: '🔗',
    linkedin: '💼',
    twitter: '🐦',
    email: '✉️',
  };

  return (
    <span className={className} aria-label={name}>
      {iconMap[name.toLowerCase()] || '🔗'}
    </span>
  );
};

export default SocialIcon;

