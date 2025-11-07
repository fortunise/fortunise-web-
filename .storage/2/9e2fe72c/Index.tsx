import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  Lightbulb, 
  Shield,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
  FileText,
  Lock,
  Building2,
  Briefcase,
  ShoppingBag,
  LineChart,
  Award,
  Activity,
  DollarSign,
  PieChart,
  Calendar,
  Landmark,
  Rocket,
  Building,
  FlaskConical,
  FileCheck,
  Banknote,
  Presentation,
  Globe,
  Layers,
  Clock,
  RefreshCw,
  Sparkles,
  ClipboardCheck
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function Index() {
  const calendlyLink = 'https://calendly.com/fortunisemain/30-min-introduction-meeting';
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: Target,
      title: 'Business Planning',
      description: 'Strategic planning and roadmap development to achieve your business goals with precision and clarity.'
    },
    {
      icon: BarChart3,
      title: 'Financial Analysis',
      description: 'Comprehensive financial assessments and forecasting to optimize your business performance.'
    },
    {
      icon: Presentation,
      title: 'Pitch & Investor Deck',
      description: 'Compelling pitch decks and investor presentations designed to secure funding and win stakeholders.'
    },
    {
      icon: Users,
      title: 'Management Consulting',
      description: 'Expert guidance on organizational structure, operations, and leadership development.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Advisory',
      description: 'Transform your business with cutting-edge solutions and innovative approaches.'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Identify and mitigate business risks to ensure sustainable growth and stability.'
    }
  ];

  const businessPlanComponents = [
    {
      icon: FileText,
      title: 'Cover Page',
      description: 'Title and Purpose of the Document'
    },
    {
      icon: Lock,
      title: 'Confidentiality & NDA',
      description: 'Non-Disclosure Agreement protection'
    },
    {
      icon: TrendingUp,
      title: 'Executive Summary',
      description: 'Industry Growth & Financing Goals'
    },
    {
      icon: Building2,
      title: 'Company Information',
      description: 'Key Details and Contact Info'
    },
    {
      icon: Briefcase,
      title: 'Business Background',
      description: 'Industry Expertise & Management Skills'
    },
    {
      icon: ShoppingBag,
      title: 'Nature of Business',
      description: 'Products and Services - Product Description & Quality Commitment'
    },
    {
      icon: Target,
      title: 'Marketing Analysis',
      description: 'Target Market, Strategy, Strengths & Challenges'
    },
    {
      icon: Layers,
      title: 'TAM/SAM/SOM',
      description: 'Total Addressable Market, Serviceable Available Market & Serviceable Obtainable Market'
    },
    {
      icon: Globe,
      title: 'Go-to-Market Strategy',
      description: 'Market Entry Plan, Customer Acquisition & Distribution Channels'
    },
    {
      icon: Award,
      title: 'Performance Highlights',
      description: 'Market Share, Customer Relationships & Expansion Plans'
    },
    {
      icon: Activity,
      title: 'SWOT Analysis',
      description: 'Strengths, Weaknesses, Opportunities, Threats'
    },
    {
      icon: DollarSign,
      title: 'Project Cost Breakdown',
      description: 'Total Costs, Shareholder Funds & Loan or Investment Request'
    },
    {
      icon: BarChart3,
      title: 'Financials Breakdown',
      description: 'Revenue Assumptions - Production Capacity & Secured Commitments'
    },
    {
      icon: LineChart,
      title: 'Forecast Financials',
      description: 'Opening Balance Sheet & 2-Year Income Statement'
    },
    {
      icon: PieChart,
      title: 'Ratio & Sensitivity Analysis',
      description: 'DSCR, Current Ratio & Stress Testing'
    },
    {
      icon: Calendar,
      title: 'Monthly Sales Projections',
      description: 'Year 1 & Year 2 Detailed Breakdowns'
    }
  ];

  const fundingPrograms = [
    {
      icon: Landmark,
      title: 'Canadian Small Business Loan (CSBFL)',
      description: 'Government-backed loans up to $1M for small businesses'
    },
    {
      icon: Rocket,
      title: 'Futurpreneur',
      description: 'Financing and mentorship for young entrepreneurs aged 18-39'
    },
    {
      icon: Building,
      title: 'BDC (Business Development Bank of Canada)',
      description: 'Flexible financing solutions for Canadian businesses'
    },
    {
      icon: FlaskConical,
      title: 'IRAP (Industrial Research Assistance Program)',
      description: 'Innovation funding for technology development and R&D'
    },
    {
      icon: FileCheck,
      title: 'SR&ED (Scientific Research & Experimental Development)',
      description: 'Tax incentive program for Canadian R&D activities'
    },
    {
      icon: Banknote,
      title: 'Government Backed Loans & Grants',
      description: 'Various federal and provincial funding programs'
    }
  ];

  const testimonials = [
    {
      name: 'David Martinez',
      role: 'Owner, Martinez Manufacturing',
      content: 'Fortunise prepared our business plan exactly as the bank required. We submitted it and got approved with no further revisions or questions asked. Their attention to detail and understanding of banking requirements was exceptional.'
    },
    {
      name: 'Jennifer Lee',
      role: 'CEO, InnovateTech Solutions',
      content: 'When our investors requested revisions to our business plan, Fortunise turned it around with lightning speed. The quality was outstanding and our investors were extremely happy with the results. Highly professional service!'
    },
    {
      name: 'Robert Thompson',
      role: 'Founder, Thompson Logistics',
      content: 'The business plan Fortunise created for us is so professional that even after 2 years, we still use the same plan whenever needed. It has stood the test of time and continues to impress stakeholders. Worth every penny!'
    },
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Fortunise transformed our business strategy. Their insights helped us achieve 300% growth in just 18 months.'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, GreenVentures',
      content: 'The financial planning expertise provided by Fortunise was instrumental in securing our Series A funding.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director, Global Retail Co.',
      content: 'Professional, knowledgeable, and results-driven. Fortunise exceeded our expectations in every way.'
    }
  ];

  const benefits = [
    'Proven track record of success',
    'Customized solutions for your business',
    'Expert team with decades of experience',
    'Data-driven decision making',
    'Ongoing support and guidance',
    'Competitive pricing and flexible packages'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://fortunise.com/#business",
        "name": "Fortunise",
        "url": "https://fortunise.com",
        "logo": "/images/BusinessConsultancy.jpg",
        "image": "/images/BusinessConsultancy.jpg",
        "description": "Expert business planning, pitch decks, and financial consultancy services. Get comprehensive business plans for loans, investments, and grants.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4275 Village Centre Crt",
          "addressLocality": "Mississauga",
          "addressRegion": "ON",
          "postalCode": "L4Z1V3",
          "addressCountry": "CA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "43.5890",
          "longitude": "-79.6441"
        },
        "telephone": "+1-647-535-1499",
        "email": "hello@fortunise.com",
        "priceRange": "$$$",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "17:00"
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/fortunise",
          "https://twitter.com/fortunise",
          "https://www.facebook.com/fortunise"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://fortunise.com/#service",
        "name": "Fortunise Business Planning Services",
        "provider": {
          "@id": "https://fortunise.com/#business"
        },
        "serviceType": "Business Planning and Financial Consultancy",
        "areaServed": {
          "@type": "Country",
          "name": "Canada"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Business Planning Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Comprehensive Business Plan",
                "description": "Industry-based comprehensive business plan for loans and pitch deck for investments with 16 components, unlimited revisions, and 5-day turnaround"
              },
              "price": "3000",
              "priceCurrency": "CAD",
              "priceValidUntil": "2025-12-31",
              "availability": "https://schema.org/InStock",
              "url": "https://fortunise.com/#pricing"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Grant Business Plan",
                "description": "Custom business plans tailored for grant applications with grant-specific requirements and compliance assurance"
              },
              "price": "Custom",
              "priceCurrency": "CAD",
              "availability": "https://schema.org/InStock",
              "url": "https://fortunise.com/#pricing"
            }
          ]
        }
      },
      {
        "@type": "Organization",
        "@id": "https://fortunise.com/#organization",
        "name": "Fortunise",
        "url": "https://fortunise.com",
        "logo": {
          "@type": "ImageObject",
          "url": "/images/BusinessConsultancy.jpg",
          "width": "600",
          "height": "60"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-647-535-1499",
          "contactType": "Customer Service",
          "email": "hello@fortunise.com",
          "areaServed": "CA",
          "availableLanguage": ["English"]
        },
        "sameAs": [
          "https://www.linkedin.com/company/fortunise",
          "https://twitter.com/fortunise",
          "https://www.facebook.com/fortunise"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://fortunise.com/#website",
        "url": "https://fortunise.com",
        "name": "Fortunise - Professional Business Plans & Financial Consultancy",
        "publisher": {
          "@id": "https://fortunise.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://fortunise.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Fortunise - Professional Business Plans & Financial Consultancy Services</title>
        <meta name="title" content="Fortunise - Professional Business Plans & Financial Consultancy Services" />
        <meta 
          name="description" 
          content="Expert business planning, pitch decks, and financial consultancy services. Get comprehensive business plans for loans, investments, and grants. 5-day turnaround, unlimited revisions. $3,000 (regularly $3,500)." 
        />
        <meta 
          name="keywords" 
          content="business plan, pitch deck, financial consultancy, business planning, loan application, investment deck, grant writing, business strategy, financial analysis, Canada, CSBFL, Futurpreneur, BDC, IRAP, SR&ED, business consultant, startup funding, small business loans" 
        />
        <meta name="author" content="Fortunise" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fortunise.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fortunise.com" />
        <meta property="og:title" content="Fortunise - Professional Business Plans & Financial Consultancy Services" />
        <meta 
          property="og:description" 
          content="Expert business planning, pitch decks, and financial consultancy services. Get comprehensive business plans for loans, investments, and grants. 5-day turnaround, unlimited revisions." 
        />
        <meta property="og:image" content="/images/BusinessConsultancy.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Fortunise" />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://fortunise.com" />
        <meta name="twitter:title" content="Fortunise - Professional Business Plans & Financial Consultancy Services" />
        <meta 
          name="twitter:description" 
          content="Expert business planning, pitch decks, and financial consultancy services. Get comprehensive business plans for loans, investments, and grants. 5-day turnaround, unlimited revisions." 
        />
        <meta name="twitter:image" content="/images/BusinessConsultancy.jpg" />
        <meta name="twitter:creator" content="@fortunise" />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Mississauga" />
        <meta name="geo.position" content="43.5890;-79.6441" />
        <meta name="ICBM" content="43.5890, -79.6441" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Fixed Text Logo in Top Left Corner */}
        <header className="fixed top-6 left-6 z-50">
          <div className="relative group cursor-pointer">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300">
              Fortunise
            </h1>
            <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Transform Your Business Vision Into Reality
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
              Expert business planning and financial consultancy services to help you achieve sustainable growth and success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open(calendlyLink, '_blank')}
                aria-label="Schedule a consultation with Fortunise"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions tailored to your business needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-200"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open(calendlyLink, '_blank')}
                aria-label="Schedule a free consultation"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Funding Programs Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Business Plans & Pitch Decks for Raising Capital
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Our customers need business plans and pitch decks for raising money or getting loans from financial institutions. We confidently build robust business plans and compelling pitch decks tailored for:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fundingPrograms.map((program, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-200"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                      <program.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription className="text-base">{program.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open(calendlyLink, '_blank')}
                aria-label="Schedule a free consultation"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Pricing Our Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Transparent pricing for professional business plans and pitch decks
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Main Pricing Card */}
              <Card className="relative border-2 border-blue-500 shadow-xl">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-lg">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                    <span>Limited Time Offer</span>
                  </span>
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl text-center mb-2">
                    Industry Based Comprehensive Business Plan for Loans and Pitch Deck for Investments
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-3 mb-2">
                      <span className="text-3xl font-bold text-gray-400 line-through">$3,500</span>
                      <span className="text-5xl font-bold text-blue-600">$3,000</span>
                    </div>
                    <p className="text-sm text-gray-500">Limited time pricing</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Clock className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <div className="font-semibold text-gray-900">Ready in 5 Business Days</div>
                        <p className="text-sm text-gray-600">Fast turnaround time</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <RefreshCw className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <div className="font-semibold text-gray-900">Unlimited Revisions</div>
                        <p className="text-sm text-gray-600">We work until you're satisfied</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <div className="font-semibold text-gray-900">16 Comprehensive Components</div>
                        <p className="text-sm text-gray-600">Complete business plan package</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <div className="font-semibold text-gray-900">Industry-Specific Analysis</div>
                        <p className="text-sm text-gray-600">Tailored to your sector</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <ClipboardCheck className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <div className="font-semibold text-gray-900">Professional Loan Application Guidelines</div>
                        <p className="text-sm text-gray-600">Explaining the requirements of the loan</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open(calendlyLink, '_blank')}
                    aria-label="Get started with comprehensive business plan"
                  >
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>

              {/* Grant Business Plans Card */}
              <Card className="border-2 hover:border-blue-200 transition-colors shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-center mb-2">Business Plans for Grants</CardTitle>
                  <CardDescription className="text-center text-base">
                    Custom pricing based on grant specifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center py-4">
                    <span className="text-4xl font-bold text-gray-900">Custom Pricing</span>
                    <p className="text-sm text-gray-500 mt-2">Tailored to grant requirements</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <div className="font-semibold text-gray-900">Grant-Specific Requirements</div>
                        <p className="text-sm text-gray-600">Aligned with grant criteria</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <div className="font-semibold text-gray-900">Detailed Documentation</div>
                        <p className="text-sm text-gray-600">Comprehensive supporting materials</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <div className="font-semibold text-gray-900">Expert Grant Writers</div>
                        <p className="text-sm text-gray-600">Experienced in grant applications</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <div className="font-semibold text-gray-900">Compliance Assurance</div>
                        <p className="text-sm text-gray-600">Meets all grant guidelines</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <RefreshCw className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <div className="font-semibold text-gray-900">Unlimited Revisions</div>
                        <p className="text-sm text-gray-600">Until submission ready</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg py-6 shadow-md hover:shadow-lg transition-all duration-300"
                    onClick={() => window.open(calendlyLink, '_blank')}
                    aria-label="Request custom quote for grant business plan"
                  >
                    Request Custom Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Not sure which option is right for you? Schedule a free consultation to discuss your needs.
              </p>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => window.open(calendlyLink, '_blank')}
                aria-label="Schedule a free consultation"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Our Services Include Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Services Include</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive 16-component business plans covering every critical aspect of your business
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {businessPlanComponents.map((component, index) => (
                <article 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-blue-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center" aria-hidden="true">
                        <component.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-gray-900 mb-1">
                        {component.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {component.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open(calendlyLink, '_blank')}
                aria-label="Schedule a free consultation"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Why Choose Fortunise?</h2>
                <p className="text-lg text-gray-600 mb-8">
                  With over 15 years of experience in business consultancy, we've helped hundreds of companies 
                  achieve their goals and exceed their expectations. Our team of experts brings together diverse 
                  expertise in finance, strategy, and operations to deliver comprehensive solutions.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open(calendlyLink, '_blank')}
                    aria-label="Schedule a free consultation"
                  >
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-10 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="space-y-8">
                    <div className="flex items-center space-x-5">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 shadow-lg" aria-hidden="true">
                        <Users className="h-10 w-10" />
                      </div>
                      <div>
                        <div className="text-4xl font-bold mb-1">500+</div>
                        <div className="text-blue-100 text-lg">Clients Served</div>
                      </div>
                    </div>
                    <Separator className="bg-white/30" />
                    <div className="flex items-center space-x-5">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 shadow-lg" aria-hidden="true">
                        <TrendingUp className="h-10 w-10" />
                      </div>
                      <div>
                        <div className="text-4xl font-bold mb-1">$2B+</div>
                        <div className="text-blue-100 text-lg">Revenue Generated</div>
                      </div>
                    </div>
                    <Separator className="bg-white/30" />
                    <div className="flex items-center space-x-5">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 shadow-lg" aria-hidden="true">
                        <Target className="h-10 w-10" />
                      </div>
                      <div>
                        <div className="text-4xl font-bold mb-1">98%</div>
                        <div className="text-blue-100 text-lg">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Sliding Carousel */}
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Client Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <Card className="shadow-xl border-2 border-blue-100">
                        <CardHeader className="text-center pb-8">
                          <CardDescription className="text-lg italic mb-6 text-gray-700 leading-relaxed">
                            "{testimonial.content}"
                          </CardDescription>
                          <div className="pt-6 border-t">
                            <CardTitle className="text-xl text-gray-900">{testimonial.name}</CardTitle>
                            <p className="text-base text-gray-600 mt-2">{testimonial.role}</p>
                          </div>
                        </CardHeader>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200"
                aria-label="Previous testimonial"
              >
                <ArrowRight className="h-6 w-6 text-gray-600 rotate-180" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-6 w-6 text-gray-600" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-blue-600 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open(calendlyLink, '_blank')}
                aria-label="Schedule a free consultation"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Get In Touch</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to transform your business? Let's start the conversation
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg p-3" aria-hidden="true">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <a href="mailto:hello@fortunise.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                        hello@fortunise.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg p-3" aria-hidden="true">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <a href="tel:+16475351499" className="text-gray-600 hover:text-blue-600 transition-colors">
                        647 535 1499
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg p-3" aria-hidden="true">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Office</div>
                      <address className="text-gray-600 not-italic">
                        4275 Village Centre Crt<br />
                        Mississauga, ON L4Z1V3
                      </address>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-blue-600 to-indigo-600 text-white border-0">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl text-white">Schedule a Consultation</CardTitle>
                  <CardDescription className="text-blue-100">
                    Take the first step towards business success
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="mb-6 text-blue-50">
                    Our expert consultants are ready to discuss your business needs and create a customized 
                    strategy for your success. Book a free 30-minute consultation today.
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open(calendlyLink, '_blank')}
                    aria-label="Schedule a free consultation"
                  >
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Fortunise
                  </div>
                </div>
                <p className="text-gray-400">
                  Empowering businesses through strategic planning and financial excellence.
                </p>
              </div>
              <nav>
                <h3 className="font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#services" className="hover:text-white transition-colors">Business Planning</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Financial Analysis</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Pitch & Investor Deck</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Risk Management</a></li>
                </ul>
              </nav>
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="mailto:hello@fortunise.com" className="hover:text-white transition-colors">
                      hello@fortunise.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+16475351499" className="hover:text-white transition-colors">
                      647 535 1499
                    </a>
                  </li>
                  <li className="text-gray-400">
                    4275 Village Centre Crt<br />
                    Mississauga, ON L4Z1V3
                  </li>
                </ul>
              </div>
              <nav>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                </ul>
              </nav>
            </div>
            <Separator className="bg-gray-800 mb-8" />
            <div className="text-center text-gray-400">
              <p>&copy; 2024 Fortunise. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}