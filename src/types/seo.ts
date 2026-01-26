export interface BreadcrumbItem {
    title: string;
    url?: string;
}

export interface BlogBreadcrumbProps {
    items: BreadcrumbItem[];
}
