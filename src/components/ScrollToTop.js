import { useEffect } from 'react';
import { withRouter, useLocation } from 'react-router-dom';

function ScrollToTop({ history }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
}

export default ScrollToTop;
//   useEffect(() => {
//     const unlisten = history.listen(() => {
//       window.scrollTo(0, 0);
//     });
//     return () => {
//       unlisten();
//     };
//   }, []);

//   return null;
// }

// export default withRouter(ScrollToTop);
