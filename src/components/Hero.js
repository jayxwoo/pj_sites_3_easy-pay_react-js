import Button from "./Button";
import lottie from "lottie-web";
import { useContext, useEffect, useRef } from "react";
import { IsMobileContext } from "../contexts/IsMobileContext";

const Hero = ({ data }) => {
    const { isMobile } = useContext(IsMobileContext);
    const heroContainerRef = useRef();
    const heroAnimContainerRef = useRef();
    const animItem = useRef(null);

    useEffect(() => {
        animItem.current = lottie.loadAnimation({
            container: heroAnimContainerRef.current,
            animationData: data.anim,
            renderer: "svg",
            loop: true,
            autoplay: false,
            name: "animItem",
            rendererSettings: {
                className: "hero__anim",
            },
        });

        return () => {
            animItem.current.destroy("animItem");
        };
    }, [data.anim]);

    const playAnim = () => {
        animItem.current && animItem.current.play();
    };

    const stopAnim = () => {
        animItem.current && animItem.current.stop();
    };

    useEffect(() => {
        if (!isMobile) {
            if (data.imgPosition === 'right') {
                heroContainerRef.current.style.flexDirection = "row";
            } else {
                heroContainerRef.current.style.flexDirection = "row-reverse";
            };
        } else {
            heroContainerRef.current.style.flexDirection = "column";
        };
    }, [isMobile, data.imgPosition]);

    return (
        <div className={data.lightBg ? "hero hero--light" : "hero hero--dark"} onMouseEnter={playAnim} onMouseLeave={stopAnim}>
            <div className="hero-container" ref={heroContainerRef}>
                <div className="hero__info-container">
                    <p className="hero__info-label">{data.label}</p>
                    <h1 className="hero__info-title">{data.title}</h1>
                    <p className="hero__info-desc">{data.desc}</p>
                    <Button btnStyle={data.lightBg ? data.btnStyle[1] : data.btnStyle[0]} btnSize={isMobile ? data.btnSize[1] : data.btnSize[0]}>{data.btnLabel}</Button>
                </div>
                <div className="hero__anim-container" ref={heroAnimContainerRef}>
                </div>
            </div>
        </div>
    );
}

export default Hero;