export enum EHeaders {
  H1,
  H2,
  H3,
  H4,
  H5,
}

export interface HeadersProps {
  children: React.ReactNode;
  type: EHeaders;
  className?: string;
}
