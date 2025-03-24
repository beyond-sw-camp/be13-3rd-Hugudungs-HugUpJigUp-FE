export type Pageable<T> ={
    totalPages: number;
    totalElements: number;
    first: boolean;
    last: boolean;
    size: number;
    content: T[];
}
