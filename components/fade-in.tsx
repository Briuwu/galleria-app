"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

const createViewport = (margin: boolean = true) => {
  return margin
    ? { once: true, margin: "0px 0px 0px" }
    : { once: true, margin: "0px 0px -100px" };
};

export function FadeIn<T extends React.ElementType = "div">({
  as,
  withoutViewport = false,
  multipage = false,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, "as"> & {
  as?: T;
  withoutViewport?: boolean;
  multipage?: boolean;
}) {
  // @ts-ignore
  let Component = as ? motion[as] : motion.div;
  let shouldReduceMotion = useReducedMotion();
  const pathname = usePathname();
  const keyProps = multipage ? { key: pathname } : {};

  const viewport = createViewport(withoutViewport);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };
  const reducedMotionVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Component
      variants={shouldReduceMotion ? reducedMotionVariants : fadeInVariants}
      transition={{ duration: 0.5 }}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      {...keyProps}
      {...props}
    />
  );
}

export function FadeInStagger<T extends React.ElementType = "div">({
  as,
  faster = false,
  withoutViewport = false,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, "as"> & {
  as?: T;
  faster?: boolean;
  withoutViewport?: boolean;
}) {
  // @ts-ignore
  let Component = as ? motion[as] : motion.div;

  const viewport = createViewport(withoutViewport);

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
      {...props}
    />
  );
}

export function PresenceAnimation<T extends React.ElementType = "div">({
  as,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, "as"> & {
  as?: T;
}) {
  // @ts-ignore
  let Component = as ? motion[as] : motion.div;

  return (
    <Component
      initial={{ y: -20, opacity: 0, height: 0 }}
      animate={{ y: 0, opacity: 1, height: "auto" }}
      exit={{ y: -20, opacity: 0, height: 0 }}
      {...props}
    >
      {children}
    </Component>
  );
}
