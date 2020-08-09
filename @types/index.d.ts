declare interface Column {
    id: number | string
    title: string
    items: ColumnItem[]
}

declare interface ColumnItem {
    id: number | string
    title: string
    text: string
}