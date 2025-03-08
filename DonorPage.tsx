import { Heart, Droplet, ExternalLink } from 'lucide-react';

export default function DonorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        <div className="bg-gray-700 rounded-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <Heart className="w-10 h-10 text-red-400" />
            <h2 className="text-3xl font-bold">Organ Donation</h2>
          </div>
          <div className="space-y-4 text-gray-200">
            <h3 className="text-xl font-semibold">Age Requirements and Eligibility</h3>
            <p className="text-lg">Organ donation age limits vary based on the type — living donors must be above 18, while for deceased donors, suitability depends more on physical condition than age.</p>

            <h3 className="text-xl font-semibold mt-6">What Can Be Donated?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Organs: liver, kidney, pancreas, heart, lung, and intestine</li>
              <li>Tissues: cornea, bone, skin, heart valve, blood vessels, nerves, and tendons</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Types of Donation</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Living Donors:</strong> Can donate one kidney, part of the pancreas, or part of the liver</li>
              <li><strong>Deceased Donors:</strong> Can donate multiple organs and tissues after brainstem or cardiac death</li>
              <li>For donors under 18, consent from relatives is required</li>
            </ul>

            <div className="bg-gray-600 p-4 rounded-lg mt-6">
              <p className="text-lg">
                <strong>Important Note:</strong> To become a donor, you must sign up directly through the official NOTTO website. We cannot register anyone for organ donation through our website.
              </p>
            </div>

            <a 
              href="https://www.notto.mohfw.gov.in/index.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Register for Organ Donation (NOTTO)
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="bg-gray-700 rounded-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <Droplet className="w-10 h-10 text-red-500" />
            <h2 className="text-3xl font-bold">Blood Donation</h2>
          </div>
          <div className="space-y-4 text-gray-200">
            <p className="text-lg">Blood donation through eRaktKosh is a vital initiative by the Ministry of Health & Family Welfare, Government of India. This centralized blood bank management system helps connect donors with those in need across India.</p>

            <h3 className="text-xl font-semibold mt-6">Donor Eligibility</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Age: Between 18 and 65 years</li>
              <li>Weight: Minimum 45 kgs</li>
              <li>Temperature: Normal (below 37.5°C)</li>
              <li>Pulse: Between 50 and 100/minute, regular</li>
              <li>Blood Pressure: Systolic 100-180 mm Hg and Diastolic 50-100 mm Hg</li>
              <li>Hemoglobin: Minimum 12.5 g/dL</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Donation Interval</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Whole blood donation: Every 3 months (minimum 90 days between donations)</li>
              <li>Platelet donation: Can donate up to 24 times a year with minimum 48 hours between donations</li>
              <li>Plasma donation: Every 2 weeks</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Benefits of eRaktKosh</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Real-time availability of blood stocks</li>
              <li>Centralized blood bank management</li>
              <li>Online registration and blood requests</li>
              <li>Tracking of blood collection and issue</li>
            </ul>

            <div className="bg-gray-600 p-4 rounded-lg mt-6">
              <p className="text-lg">
                <strong>Important:</strong> Registration must be done through the official eRaktKosh portal. Our website cannot directly register blood donors.
              </p>
            </div>

            <a 
              href="https://eraktkosh.mohfw.gov.in/BLDAHIMS/bloodbank/transactions/bbpublicindex.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Register on eRaktKosh Portal
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}