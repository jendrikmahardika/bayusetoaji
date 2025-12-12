'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Phone, Mail, MapPin, Clock, Wrench, Car, Shield, Star, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleInfo: '',
    serviceType: '',
    preferredDate: '',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Appointment booked successfully!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          vehicleInfo: '',
          serviceType: '',
          preferredDate: '',
          notes: ''
        });
      } else {
        alert('Failed to book appointment');
      }
    } catch (error) {
      alert('Error booking appointment');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image src="/logo.png" alt="BAYU SETO AJI Logo" width={60} height={60} className="rounded-lg" />
              <div>
                <h1 className="text-2xl font-bold text-blue-900">BAYU SETO AJI</h1>
                <p className="text-sm text-gray-600">Professional Automotive Repair Services</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#appointment" className="text-gray-700 hover:text-blue-600 transition">Book Appointment</a>
              <a href="/privacy" className="text-gray-700 hover:text-blue-600 transition">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-blue-600 transition">Terms</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800">Trusted Since 2020</Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Expert Car Repair & <span className="text-blue-600">Maintenance</span> Services
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Professional automotive repair services you can trust. From routine maintenance to complex repairs, 
                we keep your vehicle running smoothly and safely.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: 085353876139
                </Button>
                <Button size="lg" variant="outline">
                  Book Online
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center">
                    <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold">Warranty</p>
                    <p className="text-sm text-gray-600">12 Months</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center">
                    <Star className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                    <p className="font-semibold">5 Star</p>
                    <p className="text-sm text-gray-600">Service</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center">
                    <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold">Quick</p>
                    <p className="text-sm text-gray-600">Turnaround</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center">
                    <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="font-semibold">Certified</p>
                    <p className="text-sm text-gray-600">Technicians</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Complete automotive solutions for all your needs</p>
          </div>
          
          <Tabs defaultValue="engine" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="engine">Engine</TabsTrigger>
              <TabsTrigger value="body">Body Work</TabsTrigger>
              <TabsTrigger value="electrical">Electrical</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            </TabsList>
            
            <TabsContent value="engine" className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Wrench className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Engine Diagnostics</CardTitle>
                  <CardDescription>Advanced engine scanning and troubleshooting</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">State-of-the-art diagnostic equipment to identify and resolve engine issues quickly.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Car className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Engine Repair</CardTitle>
                  <CardDescription>Complete engine overhaul and repair services</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">From minor repairs to complete engine rebuilds by certified technicians.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Oil Change</CardTitle>
                  <CardDescription>Regular oil changes and fluid checks</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Keep your engine running smoothly with regular maintenance.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="body" className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Wrench className="h-8 w-8 text-orange-600 mb-2" />
                  <CardTitle>Dent Repair</CardTitle>
                  <CardDescription>Professional dent removal and restoration</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Remove dents and restore your vehicle's appearance.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Car className="h-8 w-8 text-orange-600 mb-2" />
                  <CardTitle>Paint Work</CardTitle>
                  <CardDescription>Quality painting and finishing services</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Professional painting with color matching guarantee.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-orange-600 mb-2" />
                  <CardTitle>Collision Repair</CardTitle>
                  <CardDescription>Complete collision damage restoration</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Full collision repair services to restore your vehicle.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="electrical" className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Wrench className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>Battery Service</CardTitle>
                  <CardDescription>Battery testing and replacement</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Complete battery diagnostics and replacement services.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Car className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>Wiring Repair</CardTitle>
                  <CardDescription>Electrical system diagnostics and repair</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Expert electrical troubleshooting and repair services.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>Lighting Systems</CardTitle>
                  <CardDescription>Headlight and electrical lighting repair</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Complete lighting system repair and upgrades.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="maintenance" className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Wrench className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle>Brake Service</CardTitle>
                  <CardDescription>Brake inspection and repair</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Complete brake system maintenance and repair.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Car className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle>Tire Service</CardTitle>
                  <CardDescription>Tire rotation and replacement</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Professional tire services for optimal performance.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle>AC Service</CardTitle>
                  <CardDescription>Air conditioning maintenance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Keep your AC running efficiently all year round.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Book an Appointment</h2>
            <p className="text-xl text-gray-600">Schedule your service with our expert technicians</p>
          </div>
          
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Service Appointment Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="08123456789"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                    <Input
                      name="preferredDate"
                      type="datetime-local"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Information *</label>
                  <Input
                    name="vehicleInfo"
                    value={formData.vehicleInfo}
                    onChange={handleInputChange}
                    required
                    placeholder="Toyota Camry 2019 - ABC 1234"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
                  <Input
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    placeholder="Engine Repair, Oil Change, etc."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                  <Textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describe the issue or service needed..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  Book Appointment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/logo.png" alt="BAYU SETO AJI Logo" width={40} height={40} className="rounded" />
                <h3 className="text-xl font-bold">BAYU SETO AJI</h3>
              </div>
              <p className="text-gray-400">Professional automotive repair services you can trust.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
                <li><a href="#appointment" className="text-gray-400 hover:text-white transition">Book Appointment</a></li>
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-gray-400">085353876139</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-gray-400">KAYUNAN, Donoharjo, Ngaglik, Sleman, DIY</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-gray-400">info@bayusetoaji.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Business Hours</h4>
              <div className="space-y-1 text-gray-400">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 8:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BAYU SETO AJI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}