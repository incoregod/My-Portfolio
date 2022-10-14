import React from 'react'

const NavigationDots = ({active}) => {
    const navLinks = ["home", "about","skills","work","contact"];
    const navdotEl = navLinks.map((item, index) => (
          <a
           key={item + index}
           href= {`#${item}`}
           className= 'app__navigation-dot'
           style={active === item ? {backgroundColor: '#f57f1e'}: {}}
           />
      ));
  return (
    <div className='app__navigation'>
        {navdotEl}
    </div>
  )
}

export default NavigationDots