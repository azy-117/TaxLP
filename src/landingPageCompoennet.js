{/* <ant_artifact identifier="UniqueIdentifier1" title="LandingPage Component with Updates"> */}
import { useState } from 'react';
import { Calendar, Calculator, CheckCircle, ChevronDown, Clock, FileCheck, Shield, RefreshCw, HelpCircle, FileText, ClipboardCheck, BookOpen } from 'lucide-react';

export default function VATLandingPage() {
  const [openFaq, setOpenFaq] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">TaxWithAzeez</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
              <a href="#process" className="text-gray-600 hover:text-blue-600">Process</a>
              <a href="#trust" className="text-gray-600 hover:text-blue-600">Why Us</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Money Back Guarantee Banner */}
      <div className="bg-blue-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 text-center flex items-center justify-center gap-2">
          <RefreshCw className="animate-spin" size={20} />
          <span className="font-semibold">100% Money Back Guarantee if You're Not Satisfied!</span>
        </div>
      </div>

      {/* Updated Hero Section */}
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Simplify Your UAE Corporate Tax Filing – Let the Experts Handle It!
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Filing Corporate Tax Doesn't Have to Be a Headache!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="https://drive.google.com/drive/folders/16wiU1oxbTOvGe3Bxn75V5TbzQHBOHEGa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Get Your Free Tax Calculator & Checklist
            </a>
            <a 
              href="https://www.instagram.com/taxwithazeez/profilecard/?igsh=MTV5NTBtMzNpbXpt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              Book a Free Consultation Now
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-blue-600 mb-4">
                <FileCheck size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Complex Compliance</h3>
              <p className="text-gray-600">Filing taxes in the UAE can be confusing for businesses new to compliance.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-blue-600 mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Avoid Penalties</h3>
              <p className="text-gray-600">Missteps can lead to penalties, lost time, and stress.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-blue-600 mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Stay Ahead</h3>
              <p className="text-gray-600">Stay ahead with professional help and a streamlined process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Questions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Have Tax Questions? Get Free Expert Advice!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're just starting out or need clarity on complex tax matters, our experts are here to help. Feel free to reach out for any tax-related questions - we provide free, no-obligation advice on all UAE tax matters.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="text-blue-600 mb-4">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Understanding UAE Corporate Tax</h3>
              <p className="text-gray-600">Get clear explanations of UAE tax laws and requirements.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="text-blue-600 mb-4">
                <FileText size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tax Registration Process</h3>
              <p className="text-gray-600">Learn about the registration steps and requirements.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="text-blue-600 mb-4">
                <ClipboardCheck size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Compliance Requirements</h3>
              <p className="text-gray-600">Understand your obligations and deadlines.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="text-blue-600 mb-4">
                <HelpCircle size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Documentation Guidelines</h3>
              <p className="text-gray-600">Get guidance on required documentation and record-keeping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Leave the Complexities to Us – Filing Taxes Made Easy!
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="text-blue-600 mb-4">
                <FileCheck size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Tax Filing Service</h3>
              <p className="text-gray-600">Comprehensive support from planning to final submission.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="text-blue-600 mb-4">
                <Calculator size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Free Tax Calculator</h3>
              <p className="text-gray-600">Quickly estimate your corporate tax liability.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="text-blue-600 mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Free Checklist</h3>
              <p className="text-gray-600">A step-by-step guide to keep you on track.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-2xl font-semibold text-blue-600">Starting at just 1,000 AED</p>
            <p className="text-gray-600 mt-2">Including full filing and documentation</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Proven Tax Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-blue-600 mb-4">
                <Calendar size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">December - January</h3>
              <p className="text-gray-600">Planning & Record Setting – Gather and organize essential data.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-blue-600 mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">February - March</h3>
              <p className="text-gray-600">Drafting & IFRS Implementation – Accurate preparation tailored to UAE standards.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-blue-600 mb-4">
                <FileCheck size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">March - September</h3>
              <p className="text-gray-600">Finalization & Filing – Timely submission with complete documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Trust Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="text-blue-600 mt-1">
                  <Shield size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Guarantee to You</h3>
                  <p className="text-gray-600 mb-4">We stand behind our services with a comprehensive satisfaction guarantee. If we fail to meet our commitments or you're not satisfied with the quality of our service, you're protected by our money-back guarantee.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={20} />
                      <span>Professional service guarantee</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={20} />
                      <span>Full documentation provided</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={20} />
                      <span>Transparent process</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Rest of the code remains the same... */}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6">
              <button 
                className="w-full flex justify-between items-center"
                onClick={() => setOpenFaq(!openFaq)}
              >
                <span className="text-lg font-semibold">What's included in the 1,000 AED package?</span>
                <ChevronDown className={`transform transition-transform ${openFaq ? 'rotate-180' : ''}`} />
              </button>
              {openFaq && (
                <p className="mt-4 text-gray-600">
                  Full tax filing service, documentation, and free registration.
                </p>
              )}
            </div>
            <div className="bg-white rounded-lg p-6">
              <button 
                className="w-full flex justify-between items-center"
                onClick={() => setOpenFaq(!openFaq)}
              >
                <span className="text-lg font-semibold">How does the money-back guarantee work?</span>
                <ChevronDown className={`transform transition-transform ${openFaq ? 'rotate-180' : ''}`} />
              </button>
              {openFaq && (
                <p className="mt-4 text-gray-600">
                  If you're not satisfied with our services, simply let us know and we'll process a full refund of your payment. We believe in complete transparency and customer satisfaction.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 TaxWithAzeez. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
// </ant_artifact>
