import { useEffect } from 'react';

const Live2DScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

export default Live2DScript;
