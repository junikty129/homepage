import React from 'react';
import logoSvg from '../assets/images/kns_logo.svg';

interface CompanyLogoProps {
  className?: string;
  showText?: boolean;
  textColor?: string;
  subTextColor?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  className = '',
  showText = true,
  textColor = 'text-white',
  subTextColor = 'text-blue-400',
  size = 'md'
}) => {
  const logoDimensions = {
    sm: 'h-9 w-auto',
    md: 'h-11 w-auto',
    lg: 'h-16 w-auto',
  }[size];

  const textSizes = {
    sm: { title: 'text-base', sub: 'text-[10px]' },
    md: { title: 'text-xl', sub: 'text-xs' },
    lg: { title: 'text-2xl', sub: 'text-sm' },
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Transparent Logo Image */}
      <img
        src={logoSvg}
        alt="(주)케이앤에스 로고"
        className={`${logoDimensions} object-contain transition-transform duration-300 hover:scale-105 filter drop-shadow-sm`}
        style={{ backgroundColor: 'transparent' }}
      />
      {showText && (
        <div className="flex flex-col leading-none justify-center">
          <span className={`${textSizes.title} font-black tracking-tight ${textColor} font-sans flex items-center gap-1.5`}>
            (주)케이앤에스
          </span>
        </div>
      )}
    </div>
  );
};
