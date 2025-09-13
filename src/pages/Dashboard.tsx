import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  Upload, 
  Search, 
  Filter,
  Clock,
  AlertTriangle,
  CheckCircle,
  Users,
  BarChart3,
  Bell
} from "lucide-react";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for demonstration
  const recentDocuments = [
    {
      id: 1,
      title: "Safety Protocol Update - Platform Operations",
      department: "maintenance",
      type: "Safety Manual",
      date: "2024-01-15",
      status: "processed",
      priority: "high",
      language: "English + Malayalam"
    },
    {
      id: 2,
      title: "Monthly Financial Report - December 2023",
      department: "finance",
      type: "Financial Report", 
      date: "2024-01-14",
      status: "processing",
      priority: "medium",
      language: "English"
    },
    {
      id: 3,
      title: "HR Circular - Training Schedule Update",
      department: "hr",
      type: "Circular",
      date: "2024-01-13", 
      status: "processed",
      priority: "low",
      language: "Malayalam"
    }
  ];

  const departmentStats = [
    { name: "Finance", count: 24, color: "bg-department-finance" },
    { name: "Maintenance", count: 18, color: "bg-department-maintenance" },
    { name: "HR", count: 12, color: "bg-department-hr" },
    { name: "Legal", count: 8, color: "bg-department-legal" }
  ];

  const getDepartmentColor = (dept: string) => {
    const colors = {
      finance: "bg-department-finance",
      maintenance: "bg-department-maintenance", 
      hr: "bg-department-hr",
      legal: "bg-department-legal"
    };
    return colors[dept as keyof typeof colors] || "bg-primary";
  };

  const getStatusIcon = (status: string) => {
    return status === "processed" ? CheckCircle : Clock;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <FileText className="h-5 w-5 text-primary-foreground" />
                </div>
                <h1 className="text-xl font-bold">KMRL DocIntel Dashboard</h1>
              </div>
              <Badge className="bg-secondary">Manager Access</Badge>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications (3)
              </Button>
              <Button size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Upload Document
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Document Search
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Search documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className="w-full">
                  <Filter className="h-4 w-4 mr-2" />
                  Advanced Filters
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Department Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {departmentStats.map((dept, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${dept.color}`} />
                      <span className="text-sm font-medium">{dept.name}</span>
                    </div>
                    <Badge variant="secondary">{dept.count}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Documents</p>
                      <p className="text-3xl font-bold">1,247</p>
                    </div>
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Processed Today</p>
                      <p className="text-3xl font-bold">23</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Pending Review</p>
                      <p className="text-3xl font-bold">5</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-destructive" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Processing Status */}
            <Card>
              <CardHeader>
                <CardTitle>AI Processing Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Document Analysis</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Language Translation</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Categorization</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Documents */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Recent Documents
                  <Button variant="outline" size="sm">View All</Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDocuments.map((doc) => {
                    const StatusIcon = getStatusIcon(doc.status);
                    return (
                      <div key={doc.id} className="flex items-start space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                        <div className={`w-2 h-16 rounded-full ${getDepartmentColor(doc.department)}`} />
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium truncate">{doc.title}</h4>
                            <Badge 
                              variant={doc.priority === "high" ? "destructive" : doc.priority === "medium" ? "default" : "secondary"}
                              className="ml-2"
                            >
                              {doc.priority}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <span>{doc.type}</span>
                            <span>•</span>
                            <span>{doc.date}</span>
                            <span>•</span>
                            <span>{doc.language}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <StatusIcon className={`h-4 w-4 ${doc.status === "processed" ? "text-secondary" : "text-amber-500"}`} />
                            <span className="text-sm capitalize">{doc.status}</span>
                          </div>
                        </div>
                        
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}