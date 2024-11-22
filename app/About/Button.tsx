import React from 'react'

type ButtonProps = {
    className?: string;
    downloadUrl: string;
  };
  
  export default function Button({ className, downloadUrl }: ButtonProps) {
    return (
      <a href={downloadUrl} className={className}> Download CV </a>
    )
  }

