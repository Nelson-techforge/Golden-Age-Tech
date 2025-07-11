"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Target, Clock, BookOpen, CheckCircle, Phone, MessageCircle, Facebook, Mail, Star, Trophy } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>🏆 About Us - Golden Age Tech | Empowering Seniors with Technology</title>
        <meta name="description" content="Learn about Golden Age Tech's mission to bridge the digital divide for seniors through patient, personalized technology education." />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
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
              <h2 className="text-5xl font-bold text-gray-900 mb-6">About Golden Age Tech</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We believe that age should never be a barrier to embracing technology. Our mission is to empower seniors
                with the digital skills they need to stay connected, informed, and independent in today's world.
              </p>
              <Badge className="text-lg px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500">
                500+ Students Trained
              </Badge>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 transform hover:scale-105 transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    To bridge the digital divide for seniors by providing patient, personalized, and practical technology
                    education that enhances their quality of life and keeps them connected with loved ones.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 transform hover:scale-105 transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    A world where every senior feels confident and empowered to use technology, enabling them to live more
                    connected, independent, and fulfilling lives in the digital age.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-gradient-to-r from-pink-100 to-purple-100">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Golden Age Tech?</h2>
              <p className="text-xl text-gray-600">We understand the unique needs of senior learners</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center transform hover:scale-105 transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl">Patient Instructors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">
                    Our specially trained instructors understand that learning technology can be intimidating. We go at
                    your pace, repeat as needed, and celebrate every small victory.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center transform hover:scale-105 transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl">Flexible Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">
                    Choose from morning, afternoon, or evening classes. We offer both group sessions and one-on-one
                    tutoring to match your preferred learning style.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center transform hover:scale-105 transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl">Practical Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">
                    We focus on real-world applications that matter to you - staying in touch with family, managing
                    finances, shopping online, and enjoying digital entertainment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Teaching Approach</h2>
                <p className="text-xl text-gray-600">Designed specifically for senior learners</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Step-by-Step Learning</h3>
                    <p className="text-gray-600 text-lg">
                      We break down complex technology concepts into simple, manageable steps. Each lesson builds on the
                      previous one, ensuring you never feel overwhelmed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Hands-On Practice</h3>
                    <p className="text-gray-600 text-lg">
                      Learning by doing is our motto. You'll practice on real devices with real applications, building
                      confidence through experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                    <p className="text-gray-600 text-lg">
                      Our support doesn't end when class does. We provide follow-up sessions, practice materials, and are
                      always available to answer questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600">Choose your preferred way to contact us</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Phone Call */}
              <a href="tel:+2349154698971" className="block transform hover:scale-105 transition-all">
                <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-xl h-full">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">Call Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Tap to call directly from your phone</p>
                    <Badge className="bg-blue-500 hover:bg-blue-600 text-white">+234-9154698971</Badge>
                    <p className="text-sm text-gray-500 mt-2">Available Mon-Fri 9AM-5PM</p>
                  </CardContent>
                </Card>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2349154698972?text=Hello%20Golden%20Age%20Tech,%20I'm%20interested%20in%20learning%20more%20about%20your%20courses"
                target="_blank"
                rel="noopener noreferrer"
                className="block transform hover:scale-105 transition-all"
              >
                <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-xl h-full">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">WhatsApp</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Chat with us instantly on WhatsApp</p>
                    <Badge className="bg-green-500 hover:bg-green-600 text-white">+234-9154698972</Badge>
                    <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
                  </CardContent>
                </Card>
              </a>

              {/* SMS/Text Message */}
              <a
                href="sms:+2349154698971?body=Hello%20Golden%20Age%20Tech,%20I%20would%20like%20to%20know%20more%20about%20your%20courses"
                className="block transform hover:scale-105 transition-all"
              >
                <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-xl h-full">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">Text Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Send us a text message</p>
                    <Badge className="bg-purple-500 hover:bg-purple-600 text-white">+234-9154698971</Badge>
                    <p className="text-sm text-gray-500 mt-2">We'll reply quickly</p>
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
                <Card className="text-center bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200 hover:shadow-xl h-full">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Facebook className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">Facebook</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Message us on Facebook</p>
                    <Badge className="bg-blue-600 hover:bg-blue-700 text-white">@Golden Age Tech</Badge>
                    <p className="text-sm text-gray-500 mt-2">Follow for updates</p>
                  </CardContent>
                </Card>
              </a>
            </div>

            {/* Instructions Section */}
            <div className="mt-12 max-w-4xl mx-auto">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">How to Contact Us from Your Device</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <Phone className="w-6 h-6 mr-2 text-blue-500" />
                        Making a Phone Call
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Tap the "Call Us" button above</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Your phone will automatically dial our number</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Wait for us to answer and tell us how we can help!</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <MessageCircle className="w-6 h-6 mr-2 text-green-500" />
                        Using WhatsApp
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Tap the "WhatsApp" button above</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>WhatsApp will open with our chat ready</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Type your message and tap send!</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <Mail className="w-6 h-6 mr-2 text-purple-500" />
                        Sending a Text Message
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Tap the "Text Message" button above</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Your messaging app will open</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Type your message and tap send</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <Facebook className="w-6 h-6 mr-2 text-blue-600" />
                        Facebook Messaging
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Tap the "Facebook" button above</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Our Facebook page will open</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Click "Message" to start chatting with us</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Ready to Start Your Tech Journey?</h2>
              <p className="text-xl mb-10 text-blue-100">
                Join our community of empowered seniors who have discovered the joy of technology.
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
                  href="https://wa.me/2349154698972?text=Hello%20Golden%20Age%20Tech,%20I'm%20interested%20in%20learning%20more%20about%20your%20courses"
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
                  href="sms:+2349154698971?body=Hello%20Golden%20Age%20Tech,%20I%20would%20like%20to%20know%20more%20about%20your%20courses"
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
      </div>
    </>
  )
}
