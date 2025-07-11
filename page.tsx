"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Phone, MessageCircle, Facebook, Users, Smartphone, Laptop, Camera, ShoppingCart, Video, MessageSquare, CheckCircle, ArrowRight, Play, Star, Trophy, Mail } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

const courses = [
  {
    id: 1,
    title: "How to Use Mobile Phones",
    description: "Master your smartphone from basics to advanced features",
    icon: Smartphone,
    duration: "4 weeks",
    level: "Beginner",
    color: "bg-blue-500",
    features: ["Basic phone operations", "Making calls & texts", "Installing apps", "Camera basics"],
  },
  {
    id: 2,
    title: "How to Use Laptop",
    description: "Learn computer basics and essential software",
    icon: Laptop,
    duration: "6 weeks",
    level: "Beginner",
    color: "bg-green-500",
    features: ["Computer basics", "File management", "Internet browsing", "Email setup"],
  },
  {
    id: 3,
    title: "How to Take Photos",
    description: "Capture and edit beautiful memories",
    icon: Camera,
    duration: "3 weeks",
    level: "Beginner",
    color: "bg-purple-500",
    features: ["Photography basics", "Editing photos", "Organizing pictures", "Sharing memories"],
  },
  {
    id: 4,
    title: "How to Shop Online",
    description: "Safe and secure online shopping techniques",
    icon: ShoppingCart,
    duration: "3 weeks",
    level: "Intermediate",
    color: "bg-orange-500",
    features: ["Online safety", "Finding deals", "Payment methods", "Return policies"],
  },
  {
    id: 5,
    title: "How to Message Friends",
    description: "Stay connected through messaging apps",
    icon: MessageSquare,
    duration: "2 weeks",
    level: "Beginner",
    color: "bg-pink-500",
    features: ["WhatsApp basics", "Group chats", "Sharing photos", "Voice messages"],
  },
  {
    id: 6,
    title: "How to Make Video & Voice Calls",
    description: "Connect face-to-face with loved ones",
    icon: Video,
    duration: "3 weeks",
    level: "Beginner",
    color: "bg-teal-500",
    features: ["Zoom meetings", "FaceTime calls", "Skype basics", "Group video calls"],
  },
]

export default function HomePage() {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)

  return (
    <>
      <Head>
        <title>🏆 Golden Age Tech - Empowering Seniors with Technology</title>
        <meta name="description" content="Join thousands of seniors who have discovered the joy of technology. Patient instructors, small classes, and proven results." />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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

        {/* Professional Header */}
        <header className="bg-white shadow-lg border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/logo.png"
                  alt="Golden Age Tech Logo"
                  width={60}
                  height={60}
                  className="rounded-lg shadow-md transform hover:scale-105 transition-transform"
                />
                <div>
                  <h1 className="text-2xl font-bold text-blue-900">Golden Age Tech</h1>
                  <p className="text-sm text-blue-600">Empowering Seniors with Technology</p>
                </div>
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  About
                </Link>
                <Link href="/courses" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Courses
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
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="container mx-auto text-center relative">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
                Master Technology at Your Own Pace
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Join thousands of seniors who have discovered the joy and convenience of modern technology. Our patient
                instructors make learning fun and stress-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Dialog open={isCoursesOpen} onOpenChange={setIsCoursesOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-xl px-12 py-4 transform hover:scale-105 transition-all shadow-xl"
                    >
                      <Play className="w-6 h-6 mr-3" />
                      Start Learning Today
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-3xl font-bold text-center mb-3">Choose Your Course</DialogTitle>
                      <DialogDescription className="text-center text-lg">
                        Select the technology skill you'd like to master first
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      {courses.map((course) => {
                        const IconComponent = course.icon
                        return (
                          <Card
                            key={course.id}
                            className="hover:shadow-xl transition-all cursor-pointer transform hover:scale-105 border-2 hover:border-blue-300"
                          >
                            <CardHeader className="pb-4">
                              <div className="flex items-center gap-4">
                                <div className={`p-4 rounded-xl ${course.color} text-white shadow-lg`}>
                                  <IconComponent className="w-8 h-8" />
                                </div>
                                <div className="flex-1">
                                  <CardTitle className="text-xl">{course.title}</CardTitle>
                                  <div className="flex gap-2 mt-2">
                                    <Badge variant="secondary" className="text-sm">
                                      {course.duration}
                                    </Badge>
                                    <Badge variant="outline" className="text-sm">
                                      {course.level}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <p className="text-gray-600 mb-4 text-lg">{course.description}</p>
                              <ul className="space-y-2 mb-6">
                                {course.features.map((feature, index) => (
                                  <li key={index} className="flex items-center text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                              <a href="tel:+2349154698971">
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                                  Call to Enroll
                                  <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                              </a>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>
                    <div className="text-center mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <p className="text-blue-800 font-medium text-lg">
                        Need help choosing?
                        <a href="tel:+2349154698971" className="underline hover:text-blue-600 ml-1">
                          Call us at +234-9154698971
                        </a>
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
                <Link href="/courses">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-xl px-12 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent transform hover:scale-105 transition-all"
                  >
                    View All Courses
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Stats Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="transform hover:scale-110 transition-transform">
                <div className="text-4xl font-bold mb-3">500+</div>
                <div className="text-blue-100 text-lg">Happy Students</div>
              </div>
              <div className="transform hover:scale-110 transition-transform">
                <div className="text-4xl font-bold mb-3">6</div>
                <div className="text-blue-100 text-lg">Popular Courses</div>
              </div>
              <div className="transform hover:scale-110 transition-transform">
                <div className="text-4xl font-bold mb-3">95%</div>
                <div className="text-blue-100 text-lg">Success Rate</div>
              </div>
              <div className="transform hover:scale-110 transition-transform">
                <div className="text-4xl font-bold mb-3">24/7</div>
                <div className="text-blue-100 text-lg">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Images Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group cursor-pointer">
                <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg mx-auto mb-6 flex items-center justify-center transform group-hover:scale-105 transition-transform">
                  <Laptop className="w-20 h-20 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Learn at Your Comfort</h3>
                <p className="text-gray-600">Comfortable learning environment designed for seniors</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-full h-80 bg-gradient-to-br from-green-100 to-green-200 rounded-xl shadow-lg mx-auto mb-6 flex items-center justify-center transform group-hover:scale-105 transition-transform">
                  <Smartphone className="w-20 h-20 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Stay Connected</h3>
                <p className="text-gray-600">Connect with family and friends like never before</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-full h-80 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-lg mx-auto mb-6 flex items-center justify-center transform group-hover:scale-105 transition-transform">
                  <Users className="w-20 h-20 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Guidance</h3>
                <p className="text-gray-600">Patient instructors who understand your needs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
              <p className="text-xl text-gray-600">Choose how you'd like to connect with us</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <a
                href="https://wa.me/2349154698972?text=Hello%20Golden%20Age%20Tech,%20I'm%20interested%20in%20learning%20more%20about%20your%20courses"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="text-center transform hover:scale-105 transition-all hover:shadow-xl bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">WhatsApp Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Chat with us directly on WhatsApp for instant support and course information
                    </p>
                    <Badge className="bg-green-500 hover:bg-green-600">+234-9154698972</Badge>
                  </CardContent>
                </Card>
              </a>

              <a href="tel:+2349154698971" className="block">
                <Card className="text-center transform hover:scale-105 transition-all hover:shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">Call Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Speak directly with our friendly team for personalized course recommendations
                    </p>
                    <Badge className="bg-blue-500 hover:bg-blue-600">+234-9154698971</Badge>
                  </CardContent>
                </Card>
              </a>

              <a
                href="https://web.facebook.com/profile.php?id=61573197480607"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="text-center transform hover:scale-105 transition-all hover:shadow-xl bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Facebook className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">Follow Us on Facebook</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Join our Facebook community for tips, updates, and success stories
                    </p>
                    <Badge className="bg-blue-600 hover:bg-blue-700">@Golden Age Tech</Badge>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Digital Life?</h2>
              <p className="text-xl mb-10 text-blue-100">
                Join hundreds of seniors who have already discovered the joy of technology. Start your journey today!
              </p>

              {/* Contact Methods Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {/* Phone Call */}
                <a href="tel:+2349154698971" className="block transform hover:scale-105 transition-all">
                  <Card className="text-center bg-white/10 border-white/20 hover:bg-white/20 transition-all h-full">
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-white">Call Us</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-100 mb-4">Speak with our team</p>
                      <Badge className="bg-white text-blue-600 hover:bg-blue-50">+234-9154698971</Badge>
                    </CardContent>
                  </Card>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/2349154698972?text=Hello%20Golden%20Age%20Tech,%20I'm%20ready%20to%20start%20my%20technology%20journey!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transform hover:scale-105 transition-all"
                >
                  <Card className="text-center bg-white/10 border-white/20 hover:bg-white/20 transition-all h-full">
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageCircle className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-white">WhatsApp</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-100 mb-4">Chat instantly</p>
                      <Badge className="bg-white text-green-600 hover:bg-green-50">+234-9154698972</Badge>
                    </CardContent>
                  </Card>
                </a>

                {/* Text Message */}
                <a
                  href="sms:+2349154698971?body=Hello%20Golden%20Age%20Tech,%20I%20want%20to%20start%20learning%20technology!"
                  className="block transform hover:scale-105 transition-all"
                >
                  <Card className="text-center bg-white/10 border-white/20 hover:bg-white/20 transition-all h-full">
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-white">Text Us</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-100 mb-4">Send a message</p>
                      <Badge className="bg-white text-purple-600 hover:bg-purple-50">+234-9154698971</Badge>
                    </CardContent>
                  </Card>
                </a>

                {/* Facebook */}
                <a
                  href="https://web.facebook.com/profile.php?id=61573197480607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transform hover:scale-105 transition-all"
                >
                  <Card className="text-center bg-white/10 border-white/20 hover:bg-white/20 transition-all h-full">
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Facebook className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-white">Facebook</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-100 mb-4">Message us</p>
                      <Badge className="bg-white text-blue-600 hover:bg-blue-50">@Golden Age Tech</Badge>
                    </CardContent>
                  </Card>
                </a>
              </div>

              <div className="mt-10 text-center">
                <p className="text-blue-100 text-lg">
                  Choose any method above - we're here to help you start your technology journey!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Footer */}
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
                    +234-9154698971
                  </p>
                  <p className="flex items-center gap-3 text-lg">
                    <MessageCircle className="w-5 h-5" />
                    +234-9154698972
                  </p>
                  <p className="flex items-center gap-3 text-lg">
                    <Facebook className="w-5 h-5" />
                    @Golden Age Tech
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
