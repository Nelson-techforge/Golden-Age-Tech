"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, Star, Phone, MessageCircle, Heart, Users, Trophy, CheckCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

const successStories = [
  {
    id: 1,
    name: "Margaret Johnson",
    age: 68,
    course: "How to Use Mobile Phones",
    story:
      "I was so afraid of smartphones, but now I video call my grandchildren in Canada every week! The instructors were so patient with me. I can even send photos and use WhatsApp now.",
    achievement: "Now helps other seniors in her community",
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    location: "London, UK",
  },
  {
    id: 2,
    name: "Chief Emmanuel Okafor",
    age: 72,
    course: "How to Use Laptop & Online Shopping",
    story:
      "At 72, I thought it was too late to learn computers. Golden Age Tech proved me wrong! I now manage my business emails and even shop online for my wife. Technology isn't scary anymore!",
    achievement: "Increased his business efficiency by 50%",
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    location: "New York, USA",
  },
  {
    id: 3,
    name: "Mrs. Grace Adebayo",
    age: 65,
    course: "How to Take Photos & Video Calls",
    story:
      "I missed so many family moments because I didn't know how to use my phone camera. Now I'm the family photographer! I take beautiful pictures and share them instantly.",
    achievement: "Created a family photo album with 500+ photos",
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    location: "Toronto, Canada",
  },
  {
    id: 4,
    name: "Pastor David Okoro",
    age: 70,
    course: "How to Message Friends & Video Calls",
    story:
      "Staying connected with my church members was difficult until I learned WhatsApp and Zoom. Now I conduct virtual prayer meetings and stay in touch with everyone daily!",
    achievement: "Leads online prayer groups with 100+ members",
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    location: "Sydney, Australia",
  },
  {
    id: 5,
    name: "Mrs. Fatima Aliyu",
    age: 63,
    course: "How to Shop Online",
    story:
      "Shopping was becoming difficult for me due to my mobility issues. Learning online shopping changed my life! I can now buy everything I need from home safely and securely.",
    achievement: "Saves 10 hours weekly on shopping trips",
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    location: "Dubai, UAE",
  },
  {
    id: 6,
    name: "Mr. Joseph Nwankwo",
    age: 69,
    course: "Complete Technology Package",
    story:
      "I took all the courses because I wanted to be completely tech-savvy. Best decision ever! I now help my friends and family with their devices. I feel young again!",
    achievement: "Became a tech mentor in his community",
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    location: "Berlin, Germany",
  },
  {
    id: 7,
    name: "Mrs. Blessing Okonkwo",
    age: 61,
    course: "How to Use Mobile Phones & WhatsApp",
    story:
      "My children live abroad and I felt so disconnected. After learning WhatsApp, I now chat with them daily, see photos of my grandchildren, and feel part of their lives again!",
    achievement: "Stays in daily contact with family overseas",
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    location: "Paris, France",
  },
  {
    id: 8,
    name: "Alhaji Musa Ibrahim",
    age: 74,
    course: "How to Use Laptop & Email",
    story:
      "I wanted to write my memoirs but didn't know how to use a computer. The patient instructors taught me everything! I've now written a 200-page book about my life experiences.",
    achievement: "Published his autobiography using Microsoft Word",
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    location: "Tokyo, Japan",
  },
  {
    id: 9,
    name: "Mrs. Rose Adeola",
    age: 66,
    course: "How to Take Photos & Social Media",
    story:
      "I love gardening but never knew how to share my beautiful flowers with others. Now I take amazing photos and share them on Facebook. I even have followers who ask for gardening tips!",
    achievement: "Built a social media following of 500+ garden enthusiasts",
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    location: "Cape Town, South Africa",
  },
  {
    id: 10,
    name: "Mr. Peter Chukwu",
    age: 67,
    course: "How to Shop Online & Banking",
    story:
      "Going to the bank was always stressful for me. Learning online banking and shopping has made my life so much easier. I can pay bills, transfer money, and shop from my living room!",
    achievement: "Manages all finances digitally, saving 15 hours monthly",
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    location: "Singapore",
  },
  {
    id: 11,
    name: "Mrs. Comfort Bassey",
    age: 64,
    course: "How to Make Video Calls & Messaging",
    story:
      "When my daughter had her baby in the UK, I thought I'd miss everything. Thanks to video calling, I watched my grandson take his first steps live! Technology brought my family closer.",
    achievement: "Never misses important family moments despite distance",
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    location: "Mumbai, India",
  },
  {
    id: 12,
    name: "Chief Samuel Adeyemi",
    age: 71,
    course: "Complete Digital Literacy Package",
    story:
      "I was completely lost in this digital world. My grandchildren were always on their phones and I felt left out. Now I understand everything they do and we bond over technology!",
    achievement: "Bridges the generation gap with his grandchildren",
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    location: "São Paulo, Brazil",
  },
]

const stats = [
  { number: "500+", label: "Happy Students", icon: Users },
  { number: "95%", label: "Success Rate", icon: Trophy },
  { number: "4.9/5", label: "Average Rating", icon: Star },
  { number: "6", label: "Cities Served", icon: Heart },
]

export default function SuccessStoriesPage() {
  return (
    <>
      <Head>
        <title>🏆 Success Stories - Golden Age Tech | Real Student Transformations</title>
        <meta name="description" content="Read inspiring success stories from seniors who have transformed their lives through technology training at Golden Age Tech." />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
        {/* Scrolling News Ticker */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap flex items-center">
            <span className="inline-flex items-center">
              <Star className="w-4 h-4 mr-2" />🎉 NEW: Advanced WhatsApp Course Now Available!
            </span>
            <div className="mx-16 h-6 w-px bg-white/50"></div>
            <span className="inline-flex items-center">
              <Trophy className="w-4 h-4 mr-2" />⭐ 300+ Seniors Successfully Trained in 2025
            </span>
            <div className="mx-16 h-6 w-px bg-white/50"></div>
            <span className="inline-flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />💯 95% Success Rate - Join Our Happy Students!
            </span>
            <div className="mx-16 h-6 w-px bg-white/50"></div>
            <span className="inline-flex items-center">
              <Phone className="w-4 h-4 mr-2" />📞 Call +234-9154698971 for FREE Consultation
            </span>
            <div className="mx-16 h-6 w-px bg-white/50"></div>
            <span className="inline-flex items-center">
              <MessageCircle className="w-4 h-4 mr-2" />💬 WhatsApp Support Available 24/7
            </span>
            <div className="mx-16 h-6 w-px bg-white/50"></div>
            <span className="inline-flex items-center">
              <Star className="w-4 h-4 mr-2" />🏆 Award-Winning Senior Technology Training Center
            </span>
            <div className="mx-16 h-6 w-px bg-white/50"></div>
            <span className="inline-flex items-center">
              <Users className="w-4 h-4 mr-2" />👥 Small Class Sizes - Maximum 8 Students Per Class
            </span>
            <div className="mx-16 h-6 w-px bg-white/50"></div>
          </div>
        </div>

        {/* Header */}
        <header className="bg-white shadow-lg border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/logo.png"
                  alt="Golden Age Tech Logo"
                  width={60}
                  height={60}
                  className="rounded-lg shadow-md"
                />
                <div>
                  <h1 className="text-2xl font-bold text-blue-900">Golden Age Tech</h1>
                  <p className="text-sm text-blue-600">Empowering Seniors with Technology</p>
                </div>
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  About
                </Link>
                <Link href="/courses" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Courses
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Meet our amazing students who have transformed their lives through technology. Their journeys inspire us
                every day and show that it's never too late to learn something new!
              </p>
              <Badge className="text-lg px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500">
                Real Stories • Real People • Real Results
              </Badge>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="transform hover:scale-110 transition-transform">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-green-100 text-lg">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Success Stories Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Their Amazing Journeys</h2>
              <p className="text-xl text-gray-600">From technology fear to digital confidence</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {successStories.map((story) => (
                <Card
                  key={story.id}
                  className="hover:shadow-2xl transition-all transform hover:scale-105 bg-white border-2 hover:border-green-300"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="relative mx-auto mb-4">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={`${story.name} - Happy Golden Age Tech Student`}
                        width={120}
                        height={120}
                        className="rounded-full border-4 border-green-200 shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900">{story.name}</CardTitle>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <Badge variant="outline" className="text-sm">
                        Age {story.age}
                      </Badge>
                      <Badge variant="secondary" className="text-sm">
                        {story.location}
                      </Badge>
                    </div>
                    <div className="flex justify-center mt-2">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="mb-4">
                      <Badge className="bg-blue-100 text-blue-800 text-sm mb-3">Course: {story.course}</Badge>
                    </div>

                    <div className="relative mb-4">
                      <Quote className="w-8 h-8 text-green-300 absolute -top-2 -left-2" />
                      <p className="text-gray-700 text-lg leading-relaxed pl-6 italic">{story.story}</p>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-green-800">Achievement:</span>
                      </div>
                      <p className="text-green-700">{story.achievement}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Impact */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Impact</h2>
              <p className="text-xl text-gray-600">How our students are changing their communities</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center transform hover:scale-105 transition-all">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Teaching Others</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">
                    Many of our graduates now teach technology skills to their friends and family members, creating a
                    ripple effect of digital literacy.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center transform hover:scale-105 transition-all">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-10 h-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Staying Connected</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">
                    Our students report feeling less isolated and more connected to their families and communities through
                    technology.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center transform hover:scale-105 transition-all">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-10 h-10 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Building Confidence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">
                    The confidence gained from mastering technology extends to other areas of life, making our students
                    more independent and empowered.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Your Success Story Starts Here</h2>
              <p className="text-xl mb-10 text-green-100">
                Join hundreds of seniors who have already transformed their lives with technology. Your journey to digital
                confidence begins with a single call!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="tel:+2349154698971">
                  <Button
                    size="lg"
                    className="bg-white text-green-600 hover:bg-green-50 text-xl px-12 py-4 transform hover:scale-105 transition-all shadow-xl"
                  >
                    <Phone className="w-6 h-6 mr-3" />
                    Start Your Journey
                  </Button>
                </a>
                <a
                  href="https://wa.me/2349154698972?text=Hello%20Golden%20Age%20Tech,%20I%20want%20to%20start%20my%20success%20story%20too!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-xl px-12 py-4 border-2 border-white text-white hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all bg-transparent"
                  >
                    <MessageCircle className="w-6 h-6 mr-3" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <Image src="/logo.png" alt="Golden Age Tech Logo" width={50} height={50} className="rounded-lg" />
                  <div>
                    <h3 className="text-2xl font-bold">Golden Age Tech</h3>
                    <p className="text-gray-400">Empowering Seniors with Technology</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We're dedicated to helping seniors embrace technology with confidence. Our patient instructors and
                  comprehensive courses make learning enjoyable and stress-free.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors text-lg">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses" className="hover:text-white transition-colors text-lg">
                      Our Courses
                    </Link>
                  </li>
                  <li>
                    <Link href="/success-stories" className="hover:text-white transition-colors text-lg">
                      Success Stories
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-6 text-lg">Contact Info</h4>
                <div className="space-y-4 text-gray-300">
                  <p className="flex items-center gap-3 text-lg">
                    <Phone className="w-5 h-5" />
                    <a href="tel:+2349154698971" className="hover:text-white transition-colors">
                      +234-9154698971
                    </a>
                  </p>
                  <p className="flex items-center gap-3 text-lg">
                    <MessageCircle className="w-5 h-5" />
                    <a
                      href="https://wa.me/2349154698972"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      +234-9154698972
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p className="text-lg">&copy; 2025 Golden Age Tech. All rights reserved.</p>
            </div>
          </div>
        </footer>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-scroll {
            animation: scroll 60s linear infinite;
          }
        `}</style>
      </div>
    </>
  )
}
