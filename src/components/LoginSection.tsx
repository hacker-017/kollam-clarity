import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lock, User, Shield, AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

export const LoginSection = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const roles = [
    { value: "admin", label: "System Administrator", color: "bg-destructive" },
    { value: "manager", label: "Department Manager", color: "bg-primary" },
    { value: "hr", label: "HR Personnel", color: "bg-department-hr" },
    { value: "finance", label: "Finance Team", color: "bg-department-finance" },
    { value: "maintenance", label: "Maintenance Staff", color: "bg-department-maintenance" },
    { value: "legal", label: "Legal & Compliance", color: "bg-department-legal" }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password || !selectedRole) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Authentication Required",
      description: "This platform requires Supabase integration for secure authentication. Please connect to Supabase to enable login functionality.",
    });
  };

  return (
    <section id="login" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Secure Access Portal</h2>
            <p className="text-lg text-muted-foreground">
              Role-based authentication for KMRL personnel
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Login Form */}
            <Card className="shadow-large">
              <CardHeader className="space-y-1">
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  Employee Login
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Access your department-specific documents and resources
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleLogin} className="space-y-4">
                  {/* Role Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="role">Department Role</Label>
                    <Select value={selectedRole} onValueChange={setSelectedRole}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        {roles.map((role) => (
                          <SelectItem key={role.value} value={role.value}>
                            <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${role.color}`} />
                              {role.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Username */}
                  <div className="space-y-2">
                    <Label htmlFor="username">Employee ID / Username</Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Enter your employee ID"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="transition-smooth"
                    />
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="transition-smooth"
                    />
                  </div>

                  {/* Login Button */}
                  <Button type="submit" className="w-full" size="lg">
                    <Shield className="mr-2 h-4 w-4" />
                    Secure Login
                  </Button>

                  {/* Demo Button */}
                  <Link to="/dashboard" className="block">
                    <Button type="button" variant="outline" className="w-full" size="lg">
                      View Dashboard Demo
                    </Button>
                  </Link>
                </form>

                {/* Security Notice */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 border border-amber-200">
                  <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-amber-800">Security Notice</p>
                    <p className="text-amber-700">
                      This system requires Supabase integration for authentication. 
                      All access is logged and monitored for security compliance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Role Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Access Levels
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {roles.map((role) => (
                    <div key={role.value} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${role.color}`} />
                        <span className="font-medium">{role.label}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {role.value === "admin" ? "Full Access" : "Department Specific"}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    End-to-end encryption
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    Audit trail logging
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    Role-based permissions
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    IT Act compliance
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};