import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Calendar, Edit2, Shield } from 'lucide-react';
import ProfileStats from './ProfileStats';
import ActivityHistory from './ActivityHistory';

const ProfilePage = () => {
  // Mock user data - replace with actual user data from your auth system
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    joinedDate: "January 2024",
    volunteerStatus: "Active Volunteer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="relative">
                <motion.img
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  src={userData.avatar}
                  alt="Profile"
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500/30"
                />
                <button className="absolute bottom-0 right-1/3 bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <Edit2 size={16} className="text-white" />
                </button>
              </div>

              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">{userData.name}</h2>
                <span className="px-4 py-1.5 bg-blue-600/20 rounded-full text-blue-400 text-sm font-medium">
                  {userData.volunteerStatus}
                </span>
              </div>

              <div className="space-y-4">
                <ProfileInfoItem icon={Mail} text={userData.email} />
                <ProfileInfoItem icon={Phone} text={userData.phone} />
                <ProfileInfoItem icon={MapPin} text={userData.location} />
                <ProfileInfoItem icon={Calendar} text={`Joined ${userData.joinedDate}`} />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 
                  transition-colors flex items-center justify-center gap-2"
              >
                <Edit2 size={18} />
                Edit Profile
              </motion.button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <ProfileStats />
            <ActivityHistory />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ProfileInfoItem = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-3 text-gray-300">
    <Icon size={18} className="text-blue-400" />
    <span>{text}</span>
  </div>
);

export default ProfilePage;