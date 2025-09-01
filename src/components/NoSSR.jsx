'use client';

import { useEffect, useState } from 'react';

/**
 * NoSSR Component - Prevents server-side rendering of wrapped content
 * Use this for components that must only render on the client side
 */
export default function NoSSR({ children, fallback = null }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return fallback;
  }

  return children;
}
