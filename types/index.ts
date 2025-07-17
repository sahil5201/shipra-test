export type InfoApiResponse = {
    message: string;
    result: {
        DMA_124: number;
        DMA_200: number;
        RSI: number;
        SRT_124: number;
        afterHoursChange: number;
        afterHoursPercentageChange: number;
        afterHoursPrice: number;
        athInfo: null;
        change: number;
        closeDate: string;
        crossover: {
            date: string;
            daysAgo: number;
            priceAtCross: number;
            priceChange: number;
            priceChangePercent: number;
            rsiAtCross: number;
            type: string;
            vix: {
                date: string;
                level: string;
                vixValue: number;
            };
        };
        currency: string;
        daysUntilEarnings: number;
        dividendRate: number;
        dividendYield: number;
        exchange: string;
        heatMap: {
            currency: string;
            current_open_price: number;
            current_price: number;
            historical_data: Array<{
                close: number;
                current_to_close_percentage: number;
                date: string;
                open: number;
                percentage_change: number;
                price_change: number;
            }>;
            percentage_diff_last_close_to_current: number;
            price_difference: number;
            price_difference_percentage: number;
            ticker: string;
        };
        hedgedCurrency: Array<{
            change: number;
            currency: string;
            exchange: string;
            latestClose: number;
            logo: string;
            nm: string;
            percentageChange: number;
            ticker: string;
        }>;
        index: string;
        latestClose: number;
        nextEarningsDate: string;
        opportunityMessage: string | null;
        percentageChange: number;
        remaining_opportunity: number;
        nm: string;
        ticker: string;
        id: string;
        logo: string;
    };
};

export type ClosingPricesApiResponse = {
    message: string;
    result: {
        time: string,
        value: number
    }[]
}

export type StockDataType = {
    change: number;
    change_pct: number;
    current_price: number;
    date: string;
    day: string;
    past_price: number;
    pe: number;
    pe_change_pct: number;
};

export type PerformanceApiResponse = {
    message: string;
    result: StockDataType[];
};

export type PeakDataType = {
    Close: number;
    Date: string;
    change: number;
    peak: "Highest" | "Lowest" | string;
    percentageChange: number;
    reverseChange: number;
    reversePercentageChange: number;
    timeDiff: string;
    time_diff_str: string;
    trending: boolean;
};

export type PeaksApiResponse = {
    message: string;
    result: {
        message: string;
        messageStats: {
            currentPeakDate: string;
            currentPeakDayDiff: string;
            gainPercentage: number;
            highestPeakDate: string;
            highestPeakPrice: number;
            ticker: string;
        };
        peakData: PeakDataType[];
    };
};

export type TradingDataType = {
    high: number;
    highDate: string;
    highDaysAgo: number;
    highPercentage: number;
    low: number;
    lowDate: string;
    lowDaysAgo: number;
    lowPercentage: number;
    week: string;
}

export type TradingApiResponse = {
    message: string;
    result: TradingDataType[];
};

export type DmaDataType = {
    date: string;
    day: string;
    dma_price: number;
    downward_percent: number;
    percentage_change: number;
    upward_percent: number | null;
}

export type DmaApiResponse = {
    message: string;
    result: DmaDataType[];
};

export type OverviewApiResponse = {
    message: string;
    result: {
        [key: string]: {
            [key: string]: string | number | null
        }
    }
}