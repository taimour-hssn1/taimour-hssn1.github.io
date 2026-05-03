import React from "react";

export default function FadeInSection(props:any){
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef(null);
    React.useEffect(()=>{
        const node = domRef.current;
        if (!node) return;
        // intersection observer for triggering animations only when the component is visible in the viewport (in simple words when the user can see the current div on their screen it makes isIntersecting true and we get the know that the user can see what we want to show)
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    setVisible(true);
                    observer.unobserve(node);
                }
            });
        });
        observer.observe(node);
        return ()=> {
            if (node) observer.unobserve(node);
        };
    },[]);
    return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${props.delay}` }}
      ref={domRef}
    >
      {props.children}
    </div>
  );

}