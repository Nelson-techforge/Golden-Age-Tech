"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Facebook, MessageCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Star, Trophy, CheckCircle, Users } from 'lucide-react'
import Head from "next/head"

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>🏆 Contact Us - Golden Age Tech | Get In Touch Today</title>
        <meta name="description" content="Ready to start your technology journey? Contact Golden Age Tech today for personalized guidance and course information." />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
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
                <Link href="/success-stories" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Success Stories
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ready to start your technology journey? We're here to help you every step of the way. Contact us today to
                learn more about our courses or get personalized guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <a href="tel:+2349154698971" className="block transform hover:scale-105 transition-all">
                <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-xl">
                  <CardHeader>
                    <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl">Call Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-lg">
                      Speak directly with our friendly team for course information and enrollment
                    </p>
                    <p className="text-2xl font-bold text-blue-600">+234-9154698971</p>
                    <p className="text-gray-500 mt-2">Mon-Fri: 9AM - 5PM</p>
                  </CardContent>
                </Card>
              </a>

              <a
                href="https://wa.me/2349154698972?text=Hello%20Golden%20Age%20Tech,%20I'm%20interested%20in%20learning%20more%20about%20your%20courses"
                target="_blank"
                rel="noopener noreferrer"
                className="block transform hover:scale-105 transition-all"
              >
                <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-xl">
                  <CardHeader>
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl">WhatsApp Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-lg">
                      Chat with us on WhatsApp for instant support and quick answers
                    </p>
                    <p className="text-2xl font-bold text-green-600">+234-9154698972</p>
                    <p className="text-gray-500 mt-2">Available 24/7</p>
                  </CardContent>
                </Card>
              </a>

              <a
                href="https://web.facebook.com/profile.php?id=61573197480607"
                target="_blank"
                rel="noopener noreferrer"
                className="block transform hover:scale-105 transition-all"
              >
                <Card className="text-center bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200 hover:shadow-xl">
                  <CardHeader>
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Facebook className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl">Follow Us on Facebook</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-lg">
                      Join our Facebook community for tips, updates, and success stories
                    </p>
                    <p className="text-2xl font-bold text-blue-600">@Golden Age Tech</p>
                    <p className="text-gray-500 mt-2">Daily Updates</p>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Don't Wait - Start Learning Today!</h2>
              <p className="text-xl mb-10 text-orange-100">
                Technology doesn't have to be intimidating. With our patient instructors and proven methods, you'll be
                amazed at what you can accomplish.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="tel:+2349154698971">
                  <Button
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-orange-50 text-xl px-12 py-4 transform hover:scale-105 transition-all"
                  >
                    <Phone className="w-6 h-6 mr-3" />
                    Call Now
                  </Button>
                </a>
                <a href="tel:+2349154698971">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-xl px-12 py-4 border-2 border-white text-white hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all bg-transparent"
                  >
                    <Phone className="w-6 h-6 mr-3" />
                    Call Now: +234-9154698971
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
