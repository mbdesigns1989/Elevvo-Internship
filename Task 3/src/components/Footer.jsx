import { Instagram, Youtube, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-teal-600 text-white py-8">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-200">
            <Instagram />
          </a>
          <a href="#" className="hover:text-gray-200">
            <Youtube />
          </a>
          <a href="#" className="hover:text-gray-200">
            <MessageCircle />
          </a>
        </div>

        <p className="text-sm">
          © {new Date().getFullYear()} TaskFlow. Built with passion and creativity.
        </p>
      </div>
    </footer>
  );
}