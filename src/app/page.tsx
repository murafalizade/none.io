import { Button, Card, Layout, Menu } from "antd"
import { CheckCircleOutlined } from "@ant-design/icons"
import { Content, Footer, Header } from "antd/es/layout/layout"
import Navbar from "@/components/navbar";

export default function Home() {
  return (
      <Layout className="min-h-screen bg-[#0A0A0A] text-white">
        {/* NAVBAR */}
            <Navbar />

        <Content>
          {/* HERO */}
          <section className="h-screen! relative flex flex-col items-center justify-center text-center py-32 px-8 bg-black">
            <h1 className="text-5xl font-extrabold mb-6 text-white">
              AI-Powered Sound Effects & WAV Workspace
            </h1>
            <p className="text-lg max-w-2xl mb-8 text-gray-300">
              Generate, edit, and customize sound effects with ease — powered by
              AI and designed for musicians, producers, and creators.
            </p>
            <Button
                type="primary"
                size="large"
                className="bg-gradient-to-r from-[#D438FF] to-[#8C45FF] border-none px-8 py-5"
            >
              Try Demo
            </Button>
          </section>

          {/* DEMO */}
          <section className="py-20 px-8 text-center bg-[#0D0D0D]">
            <h2 className="text-3xl font-bold mb-8 text-white">Interactive Demo</h2>
            <Card className="bg-gradient-to-b from-[#190D2E] to-[#0A0A0A] border-none text-gray-200 shadow-xl p-12">
              <p>🎛️ Demo player / waveform visualization placeholder</p>
            </Card>
          </section>

          {/* PARTNERS */}
          <section className="py-20 px-8 text-center bg-gradient-to-r from-[#0A0A0A] via-[#4A208A] to-[#0A0A0A]">
            <h2 className="text-3xl font-bold mb-12 text-white">Trusted By</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-90">
              {["Partner 1", "Partner 2", "Partner 3", "Partner 4"].map(
                  (p, i) => (
                      <div
                          key={i}
                          className="bg-white/10 h-16 flex items-center justify-center rounded-lg text-gray-300"
                      >
                        {p}
                      </div>
                  )
              )}
            </div>
          </section>

          {/* ADVANTAGES */}
          <section className="py-20 px-8 w-full h-screen" style={{
            backgroundImage: "linear-gradient(135deg, rgb(25, 13, 46) 0%, rgb(0, 0, 0) 100%)",
          }}>
            <h2 className="text-3xl font-bold mb-12 text-center text-white">
              What You Can Do
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Generate realistic sound effects instantly",
                "User-friendly dashboard for sound design",
                "Waveform editing and layering",
                "AI-powered sound suggestions",
                "Content evaluation for audio quality",
                "Goal setting for audio projects",
                "Automated alerts for file optimization",
                "Link and library management",
                "One-click audio optimization",
                "Competitor audio trend analysis",
              ].map((item, i) => (
                  <Card
                      key={i}
                      className="bg-gradient-to-tr from-[#190D2E] to-[#0A0A0A] border border-[#4A208A]/50 text-gray-200"
                  >
                    <div className="flex items-start">
                      <CheckCircleOutlined className="text-[#D438FF] mr-2 mt-1" />
                      <span>{item}</span>
                    </div>
                  </Card>
              ))}
            </div>
          </section>

          {/* PRICING */}
          <section className="py-20 px-8 bg-black text-center">
            <h2 className="text-3xl font-bold mb-12 text-white">Pricing</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Starter",
                  price: "$9/mo",
                  features: ["Basic generation", "Limited WAV exports"],
                },
                {
                  title: "Pro",
                  price: "$29/mo",
                  features: [
                    "Unlimited sound effects",
                    "Full WAV workspace",
                    "AI suggestions",
                  ],
                },
                {
                  title: "Enterprise",
                  price: "Custom",
                  features: [
                    "Team access",
                    "Custom integrations",
                    "Priority support",
                  ],
                },
              ].map((plan, i) => (
                  <Card
                      key={i}
                      title={<span>{plan.title}</span>}
                      className="bg-[#0D0D0D] border border-[#8C45FF] text-gray-200 shadow-lg"
                  >
                    <p className="text-2xl font-bold mb-4">
                      {plan.price}
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      {plan.features.map((f, idx) => (
                          <li key={idx}>✔ {f}</li>
                      ))}
                    </ul>
                    <Button
                        type="primary"
                        className="mt-6 bg-gradient-to-r from-[#D438FF] to-[#8C45FF] border-none w-full"
                    >
                      Get {plan.title}
                    </Button>
                  </Card>
              ))}
            </div>
          </section>
        </Content>

        {/* FOOTER */}
        <Footer className="text-center bg-black! text-white!  py-8 border-t border-[#1f1f1f]">
          © {new Date().getFullYear()} None — AI-Powered Sound Generator
        </Footer>
      </Layout>
  )
}
