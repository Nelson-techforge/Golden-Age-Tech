"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Laptop, Camera, ShoppingCart, Video, MessageSquare, CheckCircle, Users, Star, ArrowRight, Phone, MessageCircle, Trophy } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

const courses = [
  {
    id: 1,
    title: "How to Use Mobile Phones",
    description: "Master your smartphone from basics to advanced features",
    icon: Smartphone,
    level: "Beginner",
    color: "bg-blue-500",
    gradient: "from-blue-50 to-blue-100",
    titleColor: "text-blue-700",
    features: [
      "Basic phone operations and navigation",
      "Making calls, texts, and contacts",
      "Installing and using apps",
      "Camera and photo basics",
      "Internet browsing on mobile",
      "Safety and security settings",
    ],
  },
  {
    id: 2,
    title: "How to Use Laptop",
    description: "Learn computer basics and essential software",
    icon: Laptop,
    level: "Beginner",
    color: "bg-green-500",
    gradient: "from-green-50 to-green-100",
    titleColor: "text-green-700",
    features: [
      "Computer basics and terminology",
      "File management and organization",
      "Internet browsing and email",
      "Microsoft Word basics",
      "Online safety and security",
      "Troubleshooting common issues",
    ],
  },
  {
    id: 3,
    title: "How to Take Photos",
    description: "Capture and edit beautiful memories",
    icon: Camera,
    level: "Beginner",
    color: "bg-purple-500",
    gradient: "from-purple-50 to-purple-100",
    titleColor: "text-purple-700",
    features: [
      "Photography basics and composition",
      "Using phone and digital cameras",
      "Editing and enhancing photos",
      "Organizing and storing pictures",
      "Sharing photos with family",
      "Creating photo albums and slideshows",
    ],
  },
  {
    id: 4,
    title: "How to Shop Online",
    description: "Safe and secure online shopping techniques",
    icon: ShoppingCart,
    level: "Intermediate",
    color: "bg-orange-500",
    gradient: "from-orange-50 to-orange-100",
    titleColor: "text-orange-700",
    features: [
      "Online shopping platforms",
      "Safe payment methods",
      "Finding deals and discounts",
      "Reading reviews and ratings",
      "Return and refund policies",
      "Avoiding online scams",
    ],
  },
  {
    id: 5,
    title: "How to Message Friends",
    description: "Stay connected through messaging apps",
    icon: MessageSquare,
    level: "Beginner",
    color: "bg-pink-500",
    gradient: "from-pink-50 to-pink-100",
    titleColor: "text-pink-700",
    features: [
      "WhatsApp setup and basics",
      "Sending texts and voice messages",
      "Group chats and management",
      "Sharing photos and videos",
      "Video calling on WhatsApp",
      "Privacy and security settings",
    ],
  },
  {
    id: 6,
    title: "How to Make Video & Voice Calls",
    description: "Connect face-to-face with loved ones",
    icon: Video,
    level: "Beginner",
    color: "bg-teal-500",
    gradient: "from-teal-50 to-teal-100",
    titleColor: "text-teal-700",
    features: [
      "Zoom meetings and navigation",
      "FaceTime for iPhone users",
      "Skype setup and usage",
      "Group video calls",
      "Screen sharing basics",
      "Audio and video troubleshooting",
    ],
  },
]

export default function CoursesPage() {
  return (
    <>
      <Head>
        <title>🏆 Our Courses - Golden Age Tech | Technology Training for Seniors</title>
        <meta name="description" content="Comprehensive technology courses designed specifically for seniors. Small class sizes, patient instructors, and hands-on learning." />
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
                <Link href="/success-stories" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Success Stories
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
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Technology Courses</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Choose from our comprehensive range of technology courses designed specifically for seniors. Each course
                is taught at a comfortable pace with plenty of hands-on practice.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="text-lg px-6 py-2 bg-green-500">Small Class Sizes</Badge>
                <Badge className="text-lg px-6 py-2 bg-blue-500">Patient Instructors</Badge>
                <Badge className="text-lg px-6 py-2 bg-purple-500">Hands-On Learning</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => {
                const IconComponent = course.icon
                return (
                  <Card
                    key={course.id}
                    className={`hover:shadow-2xl transition-all transform hover:scale-105 bg-gradient-to-br ${course.gradient} border-2`}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-center mb-4">
                        <div className={`p-4 rounded-xl ${course.color} text-white shadow-lg`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                      </div>
                      <CardTitle className={`text-2xl mb-2 text-center font-bold ${course.titleColor}`}>
                        {course.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-center">{course.description}</CardDescription>
                      <div className="flex justify-center mt-3">
                        <Badge variant="outline" className="text-sm">
                          {course.level}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                        <ul className="space-y-2">
                          {course.features.map((feature, index) => (
                            <li key={index} className="flex items-start text-gray-600">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a href="tel:+2349154698971">
                        <Button className={`w-full ${course.color} hover:opacity-90 text-lg py-3 shadow-lg`}>
                          <Phone className="w-5 h-5 mr-2" />
                          Call to Enroll
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Course Benefits */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Our Courses Work</h2>
              <p className="text-xl text-gray-600">Designed specifically for senior learners</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center transform hover:scale-105 transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Small Class Sizes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">
                    Maximum 8 students per class ensures personalized attention and plenty of time for questions.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center transform hover:scale-105 transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Flexible Pace</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">
                    We move at a comfortable speed, with plenty of repetition and practice time for each concept.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center transform hover:scale-105 transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Ongoing Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">
                    Get continued support even after course completion with our follow-up sessions and help desk.
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
              <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
              <p className="text-xl mb-10 text-green-100">
                Choose your course and begin your technology journey today. Our friendly team is here to help you succeed!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="tel:+2349154698971">
                  <Button
                    size="lg"
                    className="bg-white text-green-600 hover:bg-green-50 text-xl px-12 py-4 transform hover:scale-105 transition-all"
                  >
                    <Phone className="w-6 h-6 mr-3" />
                    Call to Enroll
                  </Button>
                </a>
                <a href="tel:+2349154698971">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-xl px-12 py-4 border-2 border-white text-white hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all bg-transparent"
                  >
                    <Phone className="w-6 h-6 mr-3" />
                    Call Us: +234-9154698971
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

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
