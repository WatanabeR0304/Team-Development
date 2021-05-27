import React from 'react'

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<Props> = ({className, children}) => {
  return(
    <article className="typography">
      {children}
    </article>
  )
}

export default Typography;