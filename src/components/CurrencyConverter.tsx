
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, TrendingUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const CurrencyConverter = () => {
  const [lydAmount, setLydAmount] = useState("1000");
  const [usdAmount, setUsdAmount] = useState("");
  const [exchangeRate, setExchangeRate] = useState(0.21);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const fetchExchangeRate = async () => {
    try {
      const { data, error } = await supabase
        .from("exchange_rates")
        .select("rate")
        .eq("from_currency", "LYD")
        .eq("to_currency", "USD")
        .eq("is_active", true)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error) throw error;
      
      if (data) {
        setExchangeRate(Number(data.rate));
      }
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
      toast({
        title: "Exchange Rate Error",
        description: "Using default rate. Please try again later.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchExchangeRate();
  }, []);

  useEffect(() => {
    const lyd = parseFloat(lydAmount) || 0;
    setUsdAmount((lyd * exchangeRate).toFixed(2));
  }, [lydAmount, exchangeRate]);

  const handleSwap = () => {
    const tempRate = 1 / exchangeRate;
    setLydAmount(usdAmount);
    setUsdAmount((parseFloat(lydAmount) || 0).toFixed(2));
  };

  const refreshRate = async () => {
    setIsLoading(true);
    await fetchExchangeRate();
    setIsLoading(false);
    toast({
      title: "Rate Updated",
      description: "Exchange rate has been refreshed.",
    });
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Real-Time Currency Exchange
          </h2>
          <p className="text-slate-300 text-lg">
            Get instant LYD to USD conversions with live market rates
          </p>
        </div>

        <Card className="bg-white/10 backdrop-blur-md border-slate-700 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
              <TrendingUp className="w-6 h-6 text-teal-400" />
              Currency Converter
            </CardTitle>
            <div className="flex items-center justify-center gap-4 mt-4">
              <span className="text-sm text-slate-400">
                1 LYD = {exchangeRate.toFixed(4)} USD
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={refreshRate}
                disabled={isLoading}
                className="text-teal-400 hover:text-teal-300"
              >
                {isLoading ? "Updating..." : "Refresh"}
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              {/* LYD Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Libyan Dinar (LYD)
                </label>
                <div className="relative">
                  <Input
                    type="number"
                    value={lydAmount}
                    onChange={(e) => setLydAmount(e.target.value)}
                    className="bg-slate-800/50 border-slate-600 text-white text-lg h-14 pl-12"
                    placeholder="Enter LYD amount"
                  />
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 font-semibold">
                    د.ل
                  </span>
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center md:order-none order-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleSwap}
                  className="rounded-full w-12 h-12 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 transition-all duration-200"
                >
                  <ArrowUpDown className="w-5 h-5" />
                </Button>
              </div>

              {/* USD Output */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  US Dollar (USD)
                </label>
                <div className="relative">
                  <Input
                    type="text"
                    value={usdAmount}
                    readOnly
                    className="bg-slate-800/50 border-slate-600 text-white text-lg h-14 pl-12"
                    placeholder="USD amount"
                  />
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 font-semibold">
                    $
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center pt-4 border-t border-slate-700">
              <p className="text-sm text-slate-400">
                Exchange rates are updated in real-time and may vary based on market conditions
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CurrencyConverter;
