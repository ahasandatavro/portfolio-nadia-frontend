export type PaginationProps = {
  total: number;
  current: number;
  onChange: (page: number) => void;
};