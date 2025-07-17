import { Fragment } from "react/jsx-runtime"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import { Copy, Download } from 'lucide-react';
import LargeChart from "@/components/charts/large-chart";
import Statistics from "@/components/statistics/statistics";
import Overview from "@/components/statistics/overview/overview";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Overview | Shipra",
    description: 'Overview page...',
}

function Home() {
    const activeclass = cn("p-3.5 font-normal text-muted-foreground", "data-[state=active]:bg-theme-blue/05 data-[state=active]:text-theme-blue data-[state=active]:font-semibold data-[state=active]:rounded-lg data-[state=active]:leading-5 data-[state=active]:shadow-xs");
    return (
        <Fragment>
            <section className="bg-white p-4">
                <Tabs defaultValue="price">
                    <div className="flex justify-between items-center">
                        <div className="flex justify-start items-center">
                            <TabsList className={cn("bg-white border rounded-xl py-1.5 px-2 h-10")}>
                                <TabsTrigger value="price" className={cn(`${activeclass}`)}> Price </TabsTrigger>
                                <TabsTrigger value="drawdown" className={cn(`${activeclass}`)}>Drawdown</TabsTrigger>
                                <TabsTrigger value="pe" disabled className={cn(`${activeclass}`)}>P/E</TabsTrigger>
                                <TabsTrigger value="worstPhase" disabled className={cn(`${activeclass}`)}>Worst Phase</TabsTrigger>
                            </TabsList>
                            <div className="mx-4 border rounded-xl h-10 min-w-xs px-3 py-2.5 text-sm font-normal flex justify-center items-center gap-x-2">
                                <div>
                                    Total Change: <span className="text-muted-foreground">CA$1.22(4.80%)</span>
                                </div>
                                <div className="border-l h-5"></div>
                                <div>
                                    CAGR: <span className="text-muted-foreground">29.63%</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-x-2">
                            <Button size={'icon'} variant={'ghost'} aria-label="copy menu" className="hover:text-theme-blue size-7 hover:bg-theme-blue-50">
                                <Copy />
                            </Button>
                            <Button size={'icon'} variant={'ghost'} aria-label="download menu" className="hover:text-theme-blue size-7 hover:bg-theme-blue-50">
                                <Download />
                            </Button>
                        </div>
                    </div>

                    <TabsContent value="price">
                        <LargeChart />
                        <Overview />
                        <Statistics />
                    </TabsContent>

                    <TabsContent value="drawdown">
                        <div className="min-h-60 w-full rounded-xl border flex justify-center items-center">
                            <div className="text-center space-y-3">
                                <h1 className="text-xl leading-5 font-semibold">🚀 Coming Soon!</h1>
                                <p className="font-medium">We&apos;re working hard to bring you something amazing. Stay tuned!</p>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>


            </section>
        </Fragment>
    )
}

export default Home