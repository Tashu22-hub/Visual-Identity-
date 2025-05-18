import React from "react";

// Higher-Order Component
const SectionWrapper = (WrappedComponent, sectionId) => {
  return () => (
    <section id={sectionId} className="section-wrapper">
      <WrappedComponent />
    </section>
  );
};

export default SectionWrapper;
