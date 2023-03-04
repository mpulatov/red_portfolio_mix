import React from "react";

function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      {["Home", "About", "Work", "Skills", "Testimonials", "Contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
            aria-label
          />
        ),
      )}
    </div>
  );
}

export default NavigationDots;
