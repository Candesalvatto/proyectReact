import React, {useState} from 'react'

export const WithToggle = (WrappedComponent) => {
    const WithToggle = (props) => {

        const [toggle, setToggle] = useState(false);
    
        const handleToggle = () => {
          setToggle(!toggle)
        }

        
  return (
    <WrappedComponent
    {...props}
    toggle={toggle}
    handleToggle={handleToggle}
  />
  )
}
return WithToggle

}
