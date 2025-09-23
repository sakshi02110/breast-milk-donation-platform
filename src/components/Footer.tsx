import { Heart, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-r from-[#2d3748] to-[#4a5568] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-[#f093fb]" />
              <h3 className="text-xl font-semibold">MilkShare</h3>
            </div>
            <p className="text-gray-300">
              Connecting communities to ensure every baby gets the nourishment they deserve. Safe, verified, and caring.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#f093fb] transition-colors">Privacy</a>
              <a href="#" className="text-gray-300 hover:text-[#f093fb] transition-colors">Terms</a>
              <a href="#" className="text-gray-300 hover:text-[#f093fb] transition-colors">Safety</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#4a90e2]">For Mothers</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Find Donors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Request Milk</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support Groups</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#4ecdc4]">For Donors</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Start Donating</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Screening Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Storage Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Impact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#ffe066]">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@milkshare.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1-800-MILK-HELP</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Available Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2025 MilkShare. All rights reserved. Made with ❤️ for families everywhere.</p>
        </div>
      </div>
    </footer>
  )
}