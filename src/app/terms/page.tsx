'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Shield, AlertCircle, CheckCircle, Clock, DollarSign, Users, Tool } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image src="/logo.png" alt="BAYU SETO AJI Logo" width={50} height={50} className="rounded-lg" />
              <div>
                <h1 className="text-xl font-bold text-blue-900">BAYU SETO AJI</h1>
                <p className="text-sm text-gray-600">Professional Automotive Repair Services</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
              <Link href="/privacy" className="text-gray-700 hover:text-blue-600 transition">Privacy</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FileText className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-xl text-gray-600">Terms of service for BAYU SETO AJI automotive repair services</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: December 2024</p>
        </div>

        <div className="space-y-8">
          {/* Agreement to Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                Agreement to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Welcome to <strong>BAYU SETO AJI</strong>. These Terms and Conditions ("Terms") govern your use of our automotive repair services 
                and website. By accessing our services or website, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700">
                If you do not agree to these Terms, please do not use our services.
              </p>
            </CardContent>
          </Card>

          {/* Services Description */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Tool className="h-5 w-5 text-blue-600" />
                Services Description
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 mb-4">
                <strong>BAYU SETO AJI</strong> provides the following automotive services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Engine diagnostics and repair</li>
                <li>Transmission services</li>
                <li>Brake system repair and maintenance</li>
                <li>Electrical system diagnostics</li>
                <li>Air conditioning service</li>
                <li>Oil changes and routine maintenance</li>
                <li>Body work and paint services</li>
                <li>Tire services and wheel alignment</li>
                <li>24/7 roadside assistance (where available)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Customer Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Customer Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 mb-4">As a customer, you are responsible for:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Providing accurate vehicle information and service history</li>
                <li>Authorizing only necessary repairs after receiving estimates</li>
                <li>Paying for services rendered in a timely manner</li>
                <li>Notifying us of any known vehicle issues</li>
                <li>Removing personal valuables from your vehicle</li>
                <li>Picking up your vehicle promptly after service completion</li>
                <li>Following recommended maintenance schedules</li>
              </ul>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-blue-600" />
                Payment Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Payment Methods</h3>
                <p className="text-gray-700">We accept the following payment methods:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                  <li>Cash</li>
                  <li>Credit/Debit cards (Visa, Mastercard, etc.)</li>
                  <li>Bank transfers</li>
                  <li>Digital wallets (where available)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Payment Schedule</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Payment is due upon completion of services</li>
                  <li>For major repairs, a 50% deposit may be required</li>
                  <li>Late payments may incur additional charges</li>
                  <li>All prices are subject to applicable taxes</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Warranty and Guarantees */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                Warranty and Guarantees
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Service Warranty</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>12-month warranty on parts and labor (unless specified otherwise)</li>
                  <li>Warranty covers defects in workmanship and materials</li>
                  <li>Warranty does not cover damage due to accidents, misuse, or neglect</li>
                  <li>Proof of service receipt required for warranty claims</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Warranty Limitations</h3>
                <p className="text-gray-700">
                  Warranty is void if the vehicle is modified, abused, or not maintained according to manufacturer recommendations.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Liability and Disclaimers */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                Liability and Disclaimers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Limitation of Liability</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>We are not liable for consequential or incidental damages</li>
                  <li>Our liability is limited to the cost of services rendered</li>
                  <li>We are not responsible for delays due to parts availability</li>
                  <li>We are not liable for vehicles left on premises beyond 30 days</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vehicle Storage</h3>
                <p className="text-gray-700">
                  Vehicles not picked up within 30 days of service completion may be subject to storage fees. 
                  After 90 days, we may exercise our lien rights as permitted by law.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Service Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                Service Timeline and Delays
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 mb-4">
                While we strive to complete services in a timely manner, please note:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Service times are estimates and may vary based on parts availability</li>
                <li>Additional repairs discovered during service may extend timeline</li>
                <li>We will notify you of any significant delays</li>
                <li>Rush services may be available for additional fees</li>
                <li>We are not liable for rental car costs or alternative transportation</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cancellation Policy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                Cancellation Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Appointments may be cancelled up to 24 hours in advance without penalty</li>
                <li>Same-day cancellations may incur a cancellation fee</li>
                <li>No-shows may be charged a service fee</li>
                <li>For major repairs, cancellation policies will be outlined in the service agreement</li>
              </ul>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, 
                use, and protect your personal information.
              </p>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Dispute Resolution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 mb-4">
                In the event of a dispute:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>We first attempt to resolve issues through direct communication</li>
                <li>Mediation services may be recommended for complex disputes</li>
                <li>Legal proceedings shall be governed by Indonesian law</li>
                <li>Disputes will be handled in the jurisdiction of Sleman, Yogyakarta</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 mb-4">
                For questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-900 mb-2">BAYU SETO AJI</p>
                <p className="text-gray-700"><strong>Address:</strong> KAYUNAN, Kel. Donoharjo, Kec. Ngaglik, Kab. Sleman, Prov. Daerah Istimewa Yogyakarta 55581</p>
                <p className="text-gray-700"><strong>Phone:</strong> 085353876139</p>
                <p className="text-gray-700"><strong>Email:</strong> info@bayusetoaji.com</p>
              </div>
            </CardContent>
          </Card>

          {/* Terms Updates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Terms Updates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We reserve the right to update these Terms and Conditions at any time. Changes will be posted 
                on our website and will take effect immediately. Continued use of our services constitutes 
                acceptance of any updated terms.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Image src="/logo.png" alt="BAYU SETO AJI Logo" width={30} height={30} className="rounded" />
            <h3 className="text-lg font-bold">BAYU SETO AJI</h3>
          </div>
          <p className="text-gray-400 mb-4">Professional automotive repair services you can trust.</p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition">Home</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms & Conditions</Link>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-gray-400 text-sm">
            <p>&copy; 2024 BAYU SETO AJI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}