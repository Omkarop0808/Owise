import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FEATURES, STEPS, TESTIMONIALS } from "@/lib/landing";

export default function LandingPage() {
  return (
    <div className="flex flex-col pt-16">
      {/* ───── Hero ───── */}
      <section className="mt-20 pb-12 space-y-10 md:space-y-15 px-5 bg-gradient-to-b from-white to-white/95">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <Badge
            variant="outline"
            className="bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100 px-3 py-1"
          >
            Split bills fast. Keep friends close.
          </Badge>

          <h1 className="mx-auto max-w-5xl text-4xl font-extrabold md:text-6xl lg:text-7xl gradient-title leading-tight">
            Spend together. Settle faster. <span className="brand-pill">Owise</span>
          </h1>

          <p className="mx-auto max-w-[760px] text-gray-600 md:text-lg/relaxed">
            Track group expenses, split in seconds, and send friendly reminders —
            less math, fewer awkward convos.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-indigo-600 shadow-md transform transition hover:scale-[1.02]"
            >
              <Link href="#how-it-works" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
            >
              <Link href="#features">Explore Features</Link>
            </Button>
          </div>
        </div>

        <div className="container mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative p-1 bg-gradient-to-br from-teal-400 to-indigo-600 rounded-2xl">
            <div className="bg-white/6 rounded-xl backdrop-blur-sm p-2 animate-fadeInUp">
              <Image
                src="/hero.png"
                width={1280}
                height={720}
                alt="Banner"
                className="rounded-lg mx-auto object-cover block transform transition duration-700 hover:scale-[1.02] will-change-transform"
                priority
              />
            </div>
            <div className="pointer-events-none absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-gradient-to-tr from-teal-200 to-indigo-200 opacity-30 blur-3xl animate-float"></div>
          </div>
        </div>
      </section>

      {/* ───── Features ───── */}
      <section id="features" className="py-20 bg-indigo-50/40">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="bg-indigo-100 text-indigo-800">
            Features
          </Badge>

          <h2 className="mt-2 text-3xl md:text-4xl gradient-title">
            Everything you need to manage group money
          </h2>

          <p className="mx-auto mt-3 max-w-[700px] text-gray-700 md:text-lg/relaxed">
            Instant splits, smart reminders, and clear balances — crafted to
            keep group finances fair and friendly.
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ title, Icon, bg, color, description }) => (
              <Card
                key={title}
                className="flex flex-col items-start space-y-4 p-6 text-left hover:scale-[1.03] transform transition shadow-sm hover:shadow-lg bg-white/80"
              >
                <div className="flex items-center gap-4">
                  <div className={`rounded-full p-3 ${bg} ring-1 ring-white/30`}>
                    <Icon className={`h-6 w-6 ${color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>

                <p className="text-gray-600">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── How it works (chevron down) ───── */}
      <section id="how-it-works" className="py-20 bg-white/95">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <Badge variant="outline" className="bg-indigo-50 text-indigo-700">
              How It Works
            </Badge>

            <h2 className="mt-2 text-3xl md:text-4xl gradient-title">
              Simple steps — zero headaches
            </h2>

            <p className="mx-auto mt-3 max-w-[700px] text-gray-600 md:text-lg/relaxed">
              Add a bill, choose participants, split evenly or custom shares —
              we handle the rest and keep balances up to date.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {STEPS.map(({ label, title, description }, idx) => (
              <details
                key={label}
                className="group rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-teal-100 to-indigo-100 text-teal-700 font-semibold">
                      {label}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{title}</div>
                      <div className="text-xs text-gray-500 hidden sm:block">{description}</div>
                    </div>
                  </div>

                  <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-200 group-open:rotate-180" />
                </summary>

                <div className="mt-3 text-gray-600 pl-14 pr-4">
                  <p>{description}</p>
                  <div className="mt-3 flex gap-3">
                    <Button asChild size="sm" className="bg-teal-500 hover:opacity-95">
                      <Link href="/dashboard">Try it now</Link>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="border-indigo-200 text-indigo-600">
                      <Link href="#features">See feature</Link>
                    </Button>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Settlements (mini-section) ───── */}
      <section id="settlements" className="py-16 bg-teal-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="space-y-6 ">
              <h3 className="text-2xl font-extrabold gradient-title">
                Fast, fair settlements
              </h3>
              <p className="text-gray-700">
                Settle up instantly with payment links, or mark payments manually.
                Settlements update everyone's balances in real time so group money
                stays transparent.
              </p>

              <div className="flex gap-3 mt-4">
                <Button asChild size="md" className="bg-gradient-to-r from-indigo-600 to-teal-500 shadow px-4 py-1">
                  <Link href="/dashboard">Settle Now</Link>
                </Button>
                <Button asChild size="md" variant="outline" className="border-indigo-200 text-indigo-700 px-4 py-1 hover:bg-green-50 ">
                  <Link href="#how-it-works">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <Card className="w-full max-w-md p-4 shadow-lg transform transition hover:scale-[1.02] bg-white/90 animate-fadeInUp">
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Settle with link</div>
                    <div className="text-xs text-muted-foreground">Instant</div>
                  </div>

                  <div className="mt-2 text-sm text-gray-600">
                    Generate a secure payment link that anyone in the group can
                    use to settle their share. After payment, balances update
                    automatically.
                  </div>

                  <div className="mt-3 flex gap-2">
                    <Button asChild size="sm" className="bg-teal-500">
                      <Link href="/dashboard">Create link</Link>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="border-gray-200">
                      <Link href="/dashboard">Mark paid</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Testimonials ───── */}
      <section className="bg-indigo-50/30 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="bg-indigo-100 text-indigo-700">
            Testimonials
          </Badge>

          <h2 className="mt-2 text-3xl md:text-4xl gradient-title">
            What people love about <span className="brand-pill small">Owise</span>
          </h2>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map(({ quote, name, role, image }) => (
              <Card key={name} className="flex flex-col justify-between hover:shadow-xl transition">
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center space-x-3 py-0">
                    <Avatar>
                      <AvatarImage src={image} alt={name} />
                      <AvatarFallback className="uppercase">{name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-sm font-medium">{name}</p>
                      <p className="text-sm text-muted-foreground">{role}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 italic">“{quote}”</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Call-to-Action ───── */}
      <section className="py-20 bg-gradient-to-r from-teal-200 to-indigo-100">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-indigo-900">
            Ready to stop stressing over shared bills?
          </h2>
          <p className="mx-auto max-w-[600px] text-indigo-700 md:text-lg/relaxed">
            Start in seconds — create a group, add expenses, and let Owise handle
            the math and reminders.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-teal-500 shadow-lg hover:opacity-95">
            <Link href="/dashboard" className="flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="border-t bg-gray-100 py-12 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()}{" "}
        <span className="brand-pill inline-block align-middle">Owise</span>. All rights reserved.
      </footer>
    </div>
  );
}
