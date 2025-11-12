import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  GraduationCap,
  TrendingDown,
  DollarSign,
  Target,
  Clock,
  Users,
  TrendingUp,
  Check,
  Shield,
  Star,
  Timer,
  BarChart3,
  CheckCircle,
  AlertTriangle,
  Briefcase,
  MapPin,
  Phone,
} from "lucide-react";

const AFFILIATE_LINK = "https://track.supermoney.com/aff_c?offer_id=1629&aff_id=2815";

export default function StudentLoanRefi() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhatIsRefinancing />
      <SixBenefits />
      <ThreeStepProcess />
      <WhoShouldRefinance />
      <SavingsExamples />
      <FAQAccordion />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary via-accent to-primary py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <GraduationCap className="w-5 h-5" />
              Mesa Group Consulting | Student Loan Refinancing
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Lower Your Student Loan Payments and Save Thousands
            </h1>

            <p className="text-xl mb-8 leading-relaxed text-white/90">
              Refinance your student loans to secure a <strong>lower interest rate</strong>, reduce monthly payments, and pay off debt faster. Compare top lenders in minutes.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold mb-1">$288</div>
                <div className="text-sm text-white/80">Avg Monthly Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold mb-1">1-3%</div>
                <div className="text-sm text-white/80">Rate Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold mb-1">$10K+</div>
                <div className="text-sm text-white/80">Lifetime Savings</div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-success text-success-foreground text-xl font-bold px-12 py-5 rounded-lg hover:bg-success/90 transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105 mb-4"
            >
              Compare Rates Now →
            </a>

            <div className="flex items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4" /> No impact to credit score
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4" /> Takes 2 minutes
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4" /> 100% free comparison
              </span>
            </div>

            {/* Trust Badges */}
            <div className="flex gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#f9c65d]" />
                SSL Secure
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm flex items-center gap-2">
                <Star className="w-4 h-4 text-[#f9c65d]" />
                Trusted by Thousands
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block">
            <div className="bg-card rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                How Much Can You Save?
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Your Current Rate</span>
                    <span className="font-bold text-destructive">7.5%</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Your New Rate</span>
                    <span className="font-bold text-success">5.0%</span>
                  </div>
                  <div className="border-t border-border pt-4 mt-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Monthly Savings</div>
                        <div className="text-3xl font-bold text-success">$267</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground mb-1">Lifetime Savings</div>
                        <div className="text-3xl font-bold text-success">$48,060</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-primary text-primary-foreground font-bold py-4 rounded-lg hover:bg-primary/90 transition-all duration-200 mt-6"
              >
                Get My Personalized Rates
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIsRefinancing() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Turn Your Student Debt Into Opportunity
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Student loan refinancing replaces your existing federal or private student loans with a new loan at a <strong>lower interest rate</strong>. This can significantly reduce your monthly payments and the total amount you'll pay over the life of the loan.
          </p>
        </div>

        <div className="bg-gradient-to-br from-secondary to-background rounded-2xl p-8 mb-12 shadow-lg">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            How It Works
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#bb9446] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-foreground">New Lender Pays Off Old Loans</h4>
              <p className="text-muted-foreground text-sm">
                A new lender pays off all your existing student loans in full
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#bb9446] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-foreground">You Get One New Loan</h4>
              <p className="text-muted-foreground text-sm">
                You receive a single new loan with better terms and lower rate
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#bb9446] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-foreground">Start Saving Money</h4>
              <p className="text-muted-foreground text-sm">
                Lower interest means more money in your pocket every month
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-success text-success-foreground text-xl font-bold px-12 py-5 rounded-lg hover:bg-success/90 transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            Check My Rates (Won't Affect Credit)
          </a>
        </div>
      </div>
    </section>
  );
}

function SixBenefits() {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Lower Interest Rates",
      description: "Secure a competitive rate based on your current credit score and income—often significantly lower than your original student loan rates. Even a 1% reduction can save you thousands.",
      color: "#f9c65d",
    },
    {
      icon: DollarSign,
      title: "Reduced Monthly Payments",
      description: "Free up cash flow each month by extending your repayment term or lowering your interest rate. Use the extra money for savings, investing, or other financial goals.",
      color: "#bb9446",
    },
    {
      icon: Target,
      title: "Simplified Repayment",
      description: "Combine multiple student loans into one convenient monthly payment. No more juggling different due dates, servicers, or payment amounts.",
      color: "#f9c65d",
    },
    {
      icon: Clock,
      title: "Flexible Term Options",
      description: "Choose a repayment term that fits your budget—from 5 to 20 years. Shorter terms mean less interest paid overall; longer terms provide lower monthly payments.",
      color: "#f8d899",
    },
    {
      icon: Users,
      title: "Remove a Cosigner",
      description: "If you had a cosigner on your original loans, refinancing in your name alone can release them from that obligation and give you full financial independence.",
      color: "#bb9446",
    },
    {
      icon: TrendingUp,
      title: "Pay Off Debt Faster",
      description: "Lower rates mean more of your payment goes toward principal. You can become debt-free years earlier without increasing your monthly payment.",
      color: "#f9c65d",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-secondary to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Thousands of Graduates Are Refinancing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Refinancing your student loans can unlock financial freedom and help you achieve your goals faster
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-200 border-t-4"
                style={{ borderTopColor: benefit.color }}
              >
                <IconComponent className="w-12 h-12 mb-4" style={{ color: benefit.color }} />
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground text-xl font-bold px-12 py-5 rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            Start Saving Today →
          </a>
        </div>
      </div>
    </section>
  );
}

function ThreeStepProcess() {
  const steps = [
    {
      number: 1,
      title: "Compare Your Options",
      description: "Answer a few quick questions about your loans, credit score, and income. Our comparison tool instantly shows you personalized rates from multiple top lenders—with no impact to your credit score.",
      badgeIcon: Timer,
      badgeText: "Takes just 2 minutes",
      gradient: "from-primary to-accent",
      badgeColor: "#f9c65d",
    },
    {
      number: 2,
      title: "Choose Your Best Offer",
      description: "Review offers side-by-side, comparing interest rates, monthly payments, and loan terms. Select the option that best fits your financial goals and budget.",
      badgeIcon: BarChart3,
      badgeText: "Compare 10+ lenders",
      gradient: "from-accent to-success",
      badgeColor: "#f8d899",
    },
    {
      number: 3,
      title: "Complete Your Application",
      description: "Apply directly with your chosen lender. They'll verify your information, finalize your rate, and pay off your existing loans. You'll start making payments on your new, lower-cost loan.",
      badgeIcon: CheckCircle,
      badgeText: "Process complete in 2-4 weeks",
      gradient: "from-success to-success/90",
      badgeColor: "#bb9446",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-xl text-muted-foreground">
            From rate comparison to debt freedom—we make refinancing easy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => {
            const BadgeIcon = step.badgeIcon;
            return (
              <div key={step.number} className="relative">
                <div className={`bg-gradient-to-br ${step.gradient} rounded-2xl p-8 text-white shadow-xl`}>
                  <div 
                    className="absolute -top-6 left-8 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg"
                    style={{ backgroundColor: step.badgeColor }}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 mt-4">{step.title}</h3>
                  <p className="leading-relaxed mb-6">{step.description}</p>
                  <div className="text-sm bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center gap-2">
                    <BadgeIcon className="w-4 h-4" />
                    {step.badgeText}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-secondary rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Lower Your Payments?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Compare personalized rates from top lenders in just 2 minutes
          </p>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-success text-success-foreground text-xl font-bold px-12 py-5 rounded-lg hover:bg-success/90 transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            Get My Rates Now
          </a>
        </div>
      </div>
    </section>
  );
}

function WhoShouldRefinance() {
  const criteria = [
    {
      icon: Check,
      iconColor: "#f9c65d",
      title: "Good to Excellent Credit (650+)",
      description: "Your credit score significantly impacts the rates you'll qualify for. A score of 650 or higher typically unlocks competitive offers. The higher your score, the better your rate.",
    },
    {
      icon: Check,
      iconColor: "#bb9446",
      title: "Steady Income",
      description: "Lenders want to see reliable income that demonstrates your ability to repay. Full-time employment or consistent self-employment income qualifies.",
    },
    {
      icon: Check,
      iconColor: "#f9c65d",
      title: "High-Interest Private Loans",
      description: "If your current loans have rates above 6-7%, refinancing can lead to substantial savings. Private student loans are especially good candidates for refinancing.",
    },
    {
      icon: AlertTriangle,
      iconColor: "#f8d899",
      title: "Federal Loans You're Willing to Convert",
      description: "Federal loans come with unique protections (income-driven repayment, forgiveness programs). If you don't need these benefits, refinancing can save you money. Consider carefully before refinancing federal loans.",
    },
    {
      icon: Check,
      iconColor: "#bb9446",
      title: "No Plans for Loan Forgiveness",
      description: "If you're pursuing Public Service Loan Forgiveness (PSLF) or other federal programs, keep federal loans separate and don't refinance them. Refinancing makes you ineligible for forgiveness.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-secondary to-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Is Student Loan Refinancing Right for You?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Refinancing works best for borrowers who meet these criteria
          </p>
        </div>

        <div className="space-y-6">
          {criteria.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-card rounded-xl p-8 shadow-lg flex items-start gap-6">
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: item.iconColor }}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            See If You Qualify
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Check your rate in 2 minutes with zero impact to your credit score
          </p>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-background text-primary text-xl font-bold px-12 py-5 rounded-lg hover:bg-background/90 transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            Check My Qualification →
          </a>
        </div>
      </div>
    </section>
  );
}

function SavingsExamples() {
  const examples = [
    {
      icon: GraduationCap,
      title: "Recent Graduate",
      originalLoan: "$50,000",
      originalRate: "6.8%",
      newRate: "4.5%",
      term: "10 years",
      monthlySavings: "$142",
      totalSavings: "$17,040",
      borderColor: "#f9c65d",
      bgColor: "#f9c65d",
    },
    {
      icon: Briefcase,
      title: "Established Professional",
      originalLoan: "$100,000",
      originalRate: "7.5%",
      newRate: "5.0%",
      term: "15 years",
      monthlySavings: "$67",
      totalSavings: "$87,500",
      borderColor: "#bb9446",
      bgColor: "#bb9446",
    },
    {
      icon: TrendingUp,
      title: "Private Loan Holder",
      originalLoan: "$75,000",
      originalRate: "9.0%",
      newRate: "5.5%",
      term: "15 years",
      monthlySavings: "$267",
      totalSavings: "$48,060",
      borderColor: "#f9c65d",
      bgColor: "#f9c65d",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Real Savings Examples
          </h2>
          <p className="text-xl text-muted-foreground">
            See how much borrowers like you are saving through refinancing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {examples.map((example, index) => {
            const IconComponent = example.icon;
            return (
              <div 
                key={index} 
                className="bg-gradient-to-br from-secondary to-background rounded-xl p-8 shadow-lg border-2"
                style={{ borderColor: example.borderColor }}
              >
                <div className="text-center mb-6">
                  <IconComponent className="w-16 h-16 mx-auto mb-2" style={{ color: example.borderColor }} />
                  <h3 className="text-xl font-bold text-foreground">
                    {example.title}
                  </h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-muted-foreground">Original Loan:</span>
                    <span className="font-bold">{example.originalLoan}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-muted-foreground">Original Rate:</span>
                    <span className="font-bold text-destructive">{example.originalRate}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-muted-foreground">New Rate:</span>
                    <span className="font-bold text-success">{example.newRate}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-muted-foreground">Term:</span>
                    <span className="font-bold">{example.term}</span>
                  </div>
                </div>

                <div 
                  className="text-white rounded-lg p-6 text-center"
                  style={{ backgroundColor: example.bgColor }}
                >
                  <div className="text-sm mb-2">Monthly Savings</div>
                  <div className="text-3xl font-bold mb-4">{example.monthlySavings}</div>
                  <div className="text-sm mb-2">Total Savings</div>
                  <div className="text-3xl font-bold">{example.totalSavings}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-success text-success-foreground text-xl font-bold px-12 py-5 rounded-lg hover:bg-success/90 transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            Calculate My Savings →
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQAccordion() {
  const faqs = [
    {
      question: "Will checking rates affect my credit score?",
      answer: "No. Our rate comparison uses a soft credit check, which doesn't impact your score. Only when you formally apply with a lender will a hard inquiry be performed.",
    },
    {
      question: "How long does refinancing take?",
      answer: "Most borrowers complete the process in 2-4 weeks. Rate comparison takes 2 minutes, and applications typically take 15-30 minutes to complete.",
    },
    {
      question: "Can I refinance federal and private loans together?",
      answer: "Yes. Many lenders allow you to consolidate both federal and private loans into a single new loan. Remember, federal loans will lose their protections if refinanced.",
    },
    {
      question: "What credit score do I need?",
      answer: "Most lenders require a minimum score of 650, though the best rates go to borrowers with scores above 700. Some lenders offer options for borrowers with lower scores.",
    },
    {
      question: "Can I refinance multiple times?",
      answer: "Absolutely. Many borrowers refinance again when rates drop or their credit improves. There's no limit to how many times you can refinance.",
    },
    {
      question: "Are there fees to refinance?",
      answer: "Most lenders don't charge application, origination, or prepayment fees. However, always read the terms carefully before accepting an offer.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-secondary to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Common Questions About Student Loan Refinancing
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to your most pressing questions
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg shadow-md border-0">
              <AccordionTrigger className="px-8 py-6 hover:bg-secondary/50 rounded-lg text-left">
                <span className="text-lg font-bold text-card-foreground">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-8 py-6 bg-secondary/30">
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary via-accent to-success">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Lower Your Student Loan Payments?
        </h2>

        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Compare personalized rates from top lenders in 2 minutes. No cost, no obligation, no impact to your credit score.
        </p>

        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-background text-primary text-2xl font-bold px-16 py-6 rounded-lg hover:bg-background/90 transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105 mb-6"
        >
          Get My Rates Now →
        </a>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white text-sm mb-8">
          <div className="flex items-center justify-center gap-2">
            <Shield className="w-5 h-5" />
            <span>SSL Secure</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Check className="w-5 h-5" />
            <span>Your information is safe</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <BarChart3 className="w-5 h-5" />
            <span>Compare 10+ lenders</span>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
          <p className="text-white text-sm leading-relaxed">
            Questions? Call our Bakersfield office at <a href="tel:6613103040" className="font-bold hover:underline">(661) 310-3040</a> or schedule a free consultation. We're here to help you save money on your student loans.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground py-12 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Mesa Group Consulting</h3>
            <p className="text-sm text-gray-300 mb-4">
              Your trusted partner for credit repair and financial services in Bakersfield, CA.
            </p>
            <div className="text-sm text-gray-300 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[#bb9446] flex-shrink-0" />
                <span>5001 California Ave Suite 219<br />Bakersfield, CA 93309</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#bb9446] flex-shrink-0" />
                <a href="tel:6613103040" className="hover:text-accent">(661) 310-3040</a>
              </div>
            </div>
          </div>

          {/* For Consumers */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">For Consumers</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/build-credit" className="hover:text-accent">Build Credit</a></li>
              <li><a href="/credit-monitoring" className="hover:text-accent">Credit Monitoring</a></li>
              <li><a href="/credit-repair" className="hover:text-accent">Credit Repair</a></li>
              <li><a href="/personal-loans" className="hover:text-accent">Personal Loans</a></li>
              <li><a href="/debt-consolidation" className="hover:text-accent">Debt Consolidation</a></li>
            </ul>
          </div>

          {/* For Businesses */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">For Businesses</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/business-funding" className="hover:text-accent">Business Funding</a></li>
              <li><a href="/business-credit" className="hover:text-accent">Business Credit</a></li>
              <li><a href="/business-debt-relief" className="hover:text-accent">Business Debt Relief</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/about" className="hover:text-accent">About Us</a></li>
              <li><a href="/blog" className="hover:text-accent">Mesa News Blog</a></li>
              <li><a href="/calculators" className="hover:text-accent">Financial Calculators</a></li>
              <li><a href="/contact" className="hover:text-accent">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <p className="text-xs text-gray-400 text-center leading-relaxed mb-4">
            <strong>Important Disclosure:</strong> Mesa Group Consulting is a marketing service that connects consumers with lending partners. We do not make credit decisions. Rates, terms, and conditions are determined by your chosen lender. Refinancing federal student loans eliminates federal benefits including income-driven repayment, loan forgiveness programs, and deferment options. Consider carefully before refinancing federal loans. Not all applicants will qualify. Your actual rate depends on credit score, income, and other factors.
          </p>
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Mesa Group Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
