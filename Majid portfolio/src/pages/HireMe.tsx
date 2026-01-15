import { ArrowLeft, MessageCircle, Mail, Linkedin, Github, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HireMe = () => {
  const phoneNumber = "+923001234567"; // WhatsApp number
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=Hi%20Majid%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20you.`;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        {/* Main Content */}
        <div className="glass-card p-8 md:p-12 rounded-2xl">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-10 h-10 text-green-500" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Book Your <span className="text-gradient">Appointment</span>
          </h1>

          <p className="text-muted-foreground text-lg mb-8">
            Please book your appointment on WhatsApp for quick response and discussion about your project.
          </p>

          {/* WhatsApp Button */}
          <Button
            size="lg"
            className="w-full bg-green-500 hover:bg-green-600 text-white mb-8 py-6 text-lg"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
          </Button>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Or reach out via
            </h3>

            <div className="grid gap-3">
              {/* Phone */}
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-foreground">{phoneNumber}</span>
              </a>

              {/* Email */}
              <a
                href="mailto:majidayub96@gmail.com"
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-foreground">majidayub96@gmail.com</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/majid-ayub-4915b9210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
                <span className="text-foreground">LinkedIn Profile</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/majidayub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <Github className="w-5 h-5 text-primary" />
                <span className="text-foreground">GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-muted-foreground text-sm mt-8">
          Looking forward to working with you! 🚀
        </p>
      </div>
    </div>
  );
};

export default HireMe;
