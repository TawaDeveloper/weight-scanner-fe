import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animation from './animation.json';

function Office() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current as any,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      animationData: animation,
      rendererSettings: {
        preserveAspectRatio: 'xMinYMin slice', // Supports the same options as the svg element's preserveAspectRatio property
      },
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <div
      style={{ width: '690px', height: '620px', marginTop: '-71px' }}
      ref={container}
      onMouseEnter={() => lottie.play()}
      onMouseLeave={() => lottie.pause()}
    />
  );
}

export default Office;
