import { dataWithProgress } from "@/actions/galleries";
export type Gallery = (typeof dataWithProgress)[0] & { href: string };
