import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Upload, 
  Brain, 
  FileText, 
  Users, 
  Shield, 
  Bell,
  MessageSquare,
  Cloud,
  Mail,
  Smartphone
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Upload,
      title: "Multi-Source Ingestion",
      description: "Collect documents from WhatsApp, SharePoint, email attachments, cloud storage, and manual uploads.",
      color: "text-department-finance"
    },
    {
      icon: Brain,
      title: "AI-Powered Processing",
      description: "Intelligent document categorization, summarization, and multilingual translation with high accuracy.",
      color: "text-department-maintenance"
    },
    {
      icon: FileText,
      title: "Smart Categorization",
      description: "Automatically organize documents by department and employee role for efficient access control.",
      color: "text-department-hr"
    },
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Secure access controls ensuring employees see only relevant documents based on their position.",
      color: "text-department-legal"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "End-to-end encryption, audit logs, and compliance with Indian IT laws and data privacy norms.",
      color: "text-primary"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Real-time alerts for critical documents via email, SMS, and in-app notifications.",
      color: "text-secondary"
    }
  ];

  const integrations = [
    { icon: MessageSquare, name: "WhatsApp", description: "Document sharing" },
    { icon: Cloud, name: "SharePoint", description: "Repository sync" },
    { icon: Mail, name: "Email", description: "Attachment processing" },
    { icon: Smartphone, name: "Mobile App", description: "On-the-go access" }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Comprehensive Document Intelligence
          </h2>
          <p className="text-lg text-muted-foreground">
            Advanced AI capabilities designed specifically for KMRL's operational needs
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className={`h-12 w-12 rounded-lg bg-gradient-primary p-3 mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Department Categories */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-10">Department-Specific Organization</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Finance", color: "bg-department-finance", docs: "Invoices, Purchase Orders" },
              { name: "Maintenance", color: "bg-department-maintenance", docs: "Safety Manuals, Technical Guides" },
              { name: "Human Resources", color: "bg-department-hr", docs: "Training Schedules, Circulars" },
              { name: "Legal & Compliance", color: "bg-department-legal", docs: "Government Directives" }
            ].map((dept, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`h-2 ${dept.color}`} />
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{dept.docs}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-10">Seamless Integrations</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {integrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/50">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{integration.name}</h4>
                  <p className="text-sm text-muted-foreground">{integration.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};