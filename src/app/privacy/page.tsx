'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Lock, Database, User, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Privacy() {
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
              <Link href="/terms" className="text-gray-700 hover:text-blue-600 transition">Terms</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">Your privacy is important to us at BAYU SETO AJI</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: December 2024</p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-blue-600" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                At <strong>BAYU SETO AJI</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy outlines how we collect, use, store, and protect your data when you use our automotive repair services.
              </p>
              <p className="text-gray-700">
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-600" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Full name and contact details (phone number, email)</li>
                  <li>Home and business addresses</li>
                  <li>Vehicle information (make, model, year, license plate)</li>
                  <li>Service history and repair records</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vehicle Information</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Vehicle Identification Number (VIN)</li>
                  <li>Mileage and service records</li>
                  <li>Repair and maintenance history</li>
                  <li>Diagnostic information and test results</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Payment Information</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Credit/debit card details (processed securely)</li>
                  <li>Billing address and contact information</li>
                  <li>Invoice and payment history</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 mb-4">We use your information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Service Provision:</strong> To provide automotive repair and maintenance services</li>
                <li><strong>Communication:</strong> To contact you about appointments, service updates, and vehicle status</li>
                <li><strong>Record Keeping:</strong> To maintain accurate service records for your vehicle</li>
                <li><strong>Payment Processing:</strong> To process payments and manage billing</li>
                <li><strong>Customer Service:</strong> To respond to inquiries and provide support</li>
                <li><strong>Legal Compliance:</strong> To comply with legal and regulatory requirements</li>
                <li><strong>Service Improvement:</strong> To analyze and improve our services</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-blue-600" />
                Data Protection and Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 mb-4">
                <strong>BAYU SETO AJI</strong> implements robust security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Secure storage systems with restricted access</li>
                <li>Encryption of sensitive data</li>
                <li>Regular security audits and updates</li>
                <li>Staff training on data protection</li>
                <li>Secure payment processing systems</li>
                <li>Physical security of paper records</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We retain your information only as long as necessary for service provision and legal compliance.
              </p>
            </CardContent>
          </Card>

          {/* Third-Party Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-600" />
                Third-Party Sharing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 mb-4">We may share your information only in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Service Providers:</strong> With trusted third-party service providers essential to our operations</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or business transfers</li>
                <li><strong>Safety Concerns:</strong> To protect our rights, property, or safety, or that of our customers</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We never sell your personal information to third parties for marketing purposes.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                Your Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or how we handle your personal information, 
                please contact us:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-900 mb-2">BAYU SETO AJI</p>
                <p className="text-gray-700"><strong>Address:</strong> KAYUNAN, Kel. Donoharjo, Kec. Ngaglik, Kab. Sleman, Prov. Daerah Istimewa Yogyakarta 55581</p>
                <p className="text-gray-700"><strong>Phone:</strong> 085353876139</p>
                <p className="text-gray-700"><strong>Email:</strong> privacy@bayusetoaji.com</p>
              </div>
            </CardContent>
          </Card>

          {/* Policy Updates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                Policy Updates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                with an updated revision date. We encourage you to review this policy periodically.
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
            <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms & Conditions</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-gray-400 text-sm">
            <p>&copy; 2024 BAYU SETO AJI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}