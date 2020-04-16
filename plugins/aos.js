import AOS from "aos";

import "aos/dist/aos.css";

export default ({ app }) => {
  app.AOS = new AOS.init({
    duration: 600,
    disable: 'mobile',
    once: 'true'
  });
};
