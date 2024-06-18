export * from "gsap";
export * from "gsap/ScrollTrigger";
export * from "gsap/MotionPathPlugin";
export * from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger, useGSAP, MotionPathPlugin);