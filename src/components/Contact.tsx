import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EMAIL, PHONE, LOCATION, PHONE_RAW } from "@/lib/contants";
const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: EMAIL,
      link: `mailto:${EMAIL}`,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: PHONE,
      link: `tel:${PHONE_RAW}`,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: LOCATION,
      link: "#",
    },
  ];

  return (
    <section id="contact" className="section-padding relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 gradient-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient animate-fade-in-up">
            Let's Work Together
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Ready to bring your next project to life? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get In Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities and interesting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 glass rounded-xl hover-glow transition-all duration-300 hover:scale-105"
                >
                  <div className="text-primary">{info.icon}</div>
                  <div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {info.title}
                    </div>
                    <div className="text-foreground font-semibold">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="glass rounded-2xl p-8 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="bg-secondary/30 border-border/50 focus:border-primary"
                    name="name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="bg-secondary/30 border-border/50 focus:border-primary"
                    name="email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  required
                  className="bg-secondary/30 border-border/50 focus:border-primary"
                  name="subject"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  required
                  className="bg-secondary/30 border-border/50 focus:border-primary resize-none"
                  name="message"
                />
              </div>
              <input
                type="hidden"
                name="access_key"
                value="16602737-a42e-4f22-92fb-ac0e26010055"
              ></input>
              <Button
                type="submit"
                className="w-full gradient-primary hover-glow text-lg py-6 rounded-xl font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
