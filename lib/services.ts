import {
    ClosingPricesApiResponse, DmaApiResponse, InfoApiResponse,
    OverviewApiResponse, PeaksApiResponse, PerformanceApiResponse,
    TradingApiResponse
} from "@/types";
import Axios from "./Axios";

export async function fetchInfo(): Promise<InfoApiResponse> {
    return (await Axios.get("/admin/ticker/unauth/info")).data;
}

export async function fetchOverview(): Promise<OverviewApiResponse> {
    return (await Axios.get<OverviewApiResponse>("/admin/ticker/unauth/overview")).data;
}

export async function fetchClosingPrices(): Promise<ClosingPricesApiResponse> {
    return (await Axios.get("/admin/ticker/unauth/closing-prices")).data;
}

export async function fetchTradingHighLow(): Promise<TradingApiResponse> {
    return (await Axios.get("/admin/ticker/unauth/trading-high-low")).data;
}

export async function fetchPerformance(): Promise<PerformanceApiResponse> {
    return (await Axios.get("/admin/ticker/unauth/performance")).data;
}

export async function fetchPeakPerformance(): Promise<PeaksApiResponse> {
    return (await Axios.get("/admin/ticker/unauth/peaks")).data;
}

export async function fetchDma(): Promise<DmaApiResponse> {
    return (await Axios.get("/admin/ticker/unauth/moving-average")).data;
}

