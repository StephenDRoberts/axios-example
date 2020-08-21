export interface DailyPrices {
    total: number,
    offset: number,
    results: DailyPrice[],
    responseStatus: string | null
}
export interface DailyPrice {
    date: string,
    open: number,
    high: number,
    low: number,
    last: number,
    volume: number
}

export interface APIResponse {
    results: DailyPrice[]
}