
import { useState, useEffect } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  LogOut, 
  Wallet, 
  TrendingUp, 
  Bell, 
  Settings,
  CreditCard,
  ArrowUpRight,
  ArrowDownLeft,
  DollarSign
} from "lucide-react";

interface DashboardProps {
  session: Session;
}

const Dashboard = ({ session }: DashboardProps) => {
  const [profile, setProfile] = useState<any>(null);
  const [accounts, setAccounts] = useState<any[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchUserData();
  }, [session]);

  const fetchUserData = async () => {
    try {
      // Fetch profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      // Fetch accounts
      const { data: accountsData } = await supabase
        .from("accounts")
        .select("*")
        .eq("user_id", session.user.id);

      // Fetch notifications
      const { data: notificationsData } = await supabase
        .from("notifications")
        .select("*")
        .eq("user_id", session.user.id)
        .order("created_at", { ascending: false })
        .limit(5);

      setProfile(profileData);
      setAccounts(accountsData || []);
      setNotifications(notificationsData || []);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Signed out successfully",
        description: "See you next time!",
      });
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                LiboPay
              </h1>
              <span className="text-slate-400">|</span>
              <span className="text-white">Dashboard</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-300">
                Welcome, {profile?.full_name || session.user.email}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Account Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {accounts.map((account) => (
            <Card key={account.id} className="bg-white/10 backdrop-blur-sm border-slate-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-teal-400" />
                  {account.account_type === 'personal' ? 'Personal' : 'Business'} Account
                </CardTitle>
                <p className="text-sm text-slate-400">{account.account_number}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">LYD Balance</span>
                    <span className="text-xl font-bold text-white">
                      {Number(account.balance_lyd).toLocaleString()} د.ل
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">USD Balance</span>
                    <span className="text-xl font-bold text-teal-400">
                      ${Number(account.balance_usd).toLocaleString()}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="bg-white/10 backdrop-blur-sm border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/30 h-auto py-4 flex-col gap-2">
                <ArrowUpRight className="w-6 h-6" />
                Send Money
              </Button>
              <Button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 h-auto py-4 flex-col gap-2">
                <ArrowDownLeft className="w-6 h-6" />
                Request Money
              </Button>
              <Button className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/30 h-auto py-4 flex-col gap-2">
                <DollarSign className="w-6 h-6" />
                Exchange
              </Button>
              <Button className="bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 border border-orange-500/30 h-auto py-4 flex-col gap-2">
                <CreditCard className="w-6 h-6" />
                Add Funds
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card className="bg-white/10 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center py-8 text-slate-400">
                  <p>No recent transactions</p>
                  <p className="text-sm">Your transaction history will appear here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="bg-white/10 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <Bell className="w-5 h-5 text-yellow-400" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="p-4 bg-slate-800/50 rounded-lg border-l-4 border-teal-400"
                    >
                      <h4 className="text-white font-medium">{notification.title}</h4>
                      <p className="text-slate-400 text-sm mt-1">{notification.message}</p>
                      <p className="text-slate-500 text-xs mt-2">
                        {new Date(notification.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-slate-400">
                    <p>No notifications</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
